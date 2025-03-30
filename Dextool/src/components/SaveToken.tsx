import React, { useState } from "react";
import axios from "axios";

interface Token {
    id: string;
    name: string;
    symbol: string;
    totalLiquidityUSD: string;
}

const SaveToken = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const API_BASE_URL = "http://localhost:8080"; 

    //SAVE TOKEN
    const saveTokens = async () => {
        setLoading(true);
        setError("");
        setSuccessMessage("");
        try {
            const response = await axios.get(`${API_BASE_URL}/save-tokens`);
            console.log("Save response:", response.data);
            setSuccessMessage("Tokens saved successfully!");
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to save tokens.");
            console.error("Error details:", err);
        }
        setLoading(false);
    };

    return (
        <div className="token-container">
            <button onClick={saveTokens} disabled={loading}>
                {loading ? "Saving..." : "Save Tokens"}
            </button>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default SaveToken;