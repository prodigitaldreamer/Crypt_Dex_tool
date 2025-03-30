package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/rs/cors"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Definition of my struct for token json to database
type Token struct {
	ID                string  `bson:"id" json:"id"`
	Name              string  `bson:"name" json:"name"`
	Symbol            string  `bson:"symbol" json:"symbol"`
	DerivedETH        string  `bson:"derivedETH" json:"derivedETH"`
	TradeVolume       string  `bson:"tradeVolume" json:"tradeVolume"`
	TradeVolumeETH    string  `bson:"tradeVolumeETH" json:"tradeVolumeETH"`
	TotalLiquidity    string  `bson:"totalLiquidity" json:"totalLiquidity"`
	TxCount           string  `bson:"txCount" json:"txCount"`
	Volume24HrsETH    float64 `bson:"volume24HrsETH" json:"volume24HrsETH"`
	Volume24HrsUSD    float64 `bson:"volume24HrsUSD" json:"volume24HrsUSD"`
	TxCount24Hrs      int     `bson:"txCount24Hrs" json:"txCount24Hrs"`
	TradeVolumeUSD    string  `bson:"tradeVolumeUSD" json:"tradeVolumeUSD"`
	TotalLiquidityUSD string  `bson:"totalLiquidityUSD" json:"totalLiquidityUSD"`
	DerivedUSD        string  `bson:"derivedUSD" json:"derivedUSD"`
}

// APIResponse for my struct
type APIResponse struct {
	Body struct {
		Tokens []Token `json:"tokens"`
	} `json:"body"`
}

var client *mongo.Client
var collection *mongo.Collection

// Fetch tokens from ThetaToken API
func fetchTokens() ([]Token, error) {
	url := "https://swap-api.thetatoken.org/swap/top-tokens"
	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("API request failed: %v", err)
	}
	defer resp.Body.Close()

	var apiResponse APIResponse
	err = json.NewDecoder(resp.Body).Decode(&apiResponse)
	if err != nil {
		return nil, fmt.Errorf("failed to decode JSON: %v", err)
	}

	log.Printf("Fetched %d tokens from API", len(apiResponse.Body.Tokens))
	return apiResponse.Body.Tokens, nil
}

// Save my tokens to Database
func saveTokensToDB(tokens []Token) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	for _, token := range tokens {
		filter := map[string]interface{}{"id": token.ID}
		update := map[string]interface{}{
			"$set": token, // If Token is available in the database update it or else insert
		}
		_, err := collection.UpdateOne(ctx, filter, update, options.Update().SetUpsert(true))
		if err != nil {
			log.Printf("MongoDB upsert failed for token %s: %v", token.ID, err)
			return fmt.Errorf("MongoDB upsert failed for token %s: %v", token.ID, err)
		}
		log.Printf("Token %s saved to database", token.ID)
	}

	return nil
}

// Fetch tokens from API and save to my tokensNEw database
func saveTokensHandler(w http.ResponseWriter, r *http.Request) {
	tokens, err := fetchTokens()
	if err != nil {
		log.Printf("Error fetching tokens: %v", err)
		http.Error(w, "Failed to fetch tokens from API", http.StatusInternalServerError)
		return
	}

	err = saveTokensToDB(tokens)
	if err != nil {
		log.Printf("Error saving tokens to DB: %v", err)
		http.Error(w, "Failed to save tokens to database", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, "Tokens saved successfully")
}

func main() {
	// Database connection to mongo
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	mongoURI := "mongodb://localhost:27017"
	clientOptions := options.Client().ApplyURI(mongoURI)
	var err error
	client, err = mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("MongoDB connection failed: %v", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("MongoDB ping failed: %v", err)
	}

	collection = client.Database("tokensNew").Collection("tokens")
	log.Println("Connected to MongoDB (tokensNew)")

	// Corshandler for frontend interface URL using 3000 port
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
	})

	// http server
	mux := http.NewServeMux()
	mux.HandleFunc("/save-tokens", saveTokensHandler)

	log.Println("Server running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", corsHandler.Handler(mux)))
}
