// MainPage.js
import React from "react";
import MainComponent from "./MainComponent";
import { Header } from "./Header";
import { TokenList } from "./TokenList";
import Footer from "./Footer";
import SaveToken from "./SaveToken";

const MainPage = () => {
  return (
    <div>
      <Header />
      <TokenList />
      <MainComponent />
      <SaveToken />
      <Footer />
    </div>
  );
};

export default MainPage;
