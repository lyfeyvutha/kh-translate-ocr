import React from "react";
import Header from "./modules/Header";
import LanguageSelector from "./modules/LanguageSelector";
import OCRTranslator from "./modules/OCRTranslator";
import "../utilities.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="App-title">
        <h1>
          ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍
          <br />
          អគ្គនាយកដ្ឋានបច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន
        </h1>
      </div>
      <LanguageSelector />
      <div className="App-container">
        <OCRTranslator />
        <p></p>
      </div>
    </>
  );
};

export default App;
