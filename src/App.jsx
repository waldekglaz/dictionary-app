import { useState, useEffect } from "react";
import Header from "./components/Header";
import ResultHeader from "./components/ResultHeader";
import Card from "./components/Card";
import ErrorMsg from "./components/ErrorMsg";
import { ThreeDots } from "react-loader-spinner";
import SearchIcon from "./assets/images/icon-search.svg";
import NewWindowIcon from "./assets/images/icon-new-window.svg";
import fetchData from "./api";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [darkToggle, setDarkToggle] = useState(false);
  const [activeFont, setActiveFont] = useState("font-mono");
  const [isFontWindowOpen, setIsFontWindowOpen] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData(userInput, setError, setSearchResult, setIsLoading);
    setUserInput("");
  };

  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const themeChangeHandler = () => {
    setDarkToggle(!darkToggle);
  };
  const fontChangeHandler = (e) => {
    setActiveFont(e.target.dataset.font);
    setIsFontWindowOpen(false);
  };
  const toggleFontWindow = () => {
    setIsFontWindowOpen(!isFontWindowOpen);
  };
  return (
    <div className={`w-full min-h-screen  ${darkToggle ? "dark bg-black text-white " : ""} ${activeFont}`}>
      <div className={`max-w-3xl mr-auto ml-auto px-6 pb-20 pt-6 container md:px-10 md:pb-28 `}>
        <Header onClick={themeChangeHandler} theme={darkToggle} font={activeFont} onFontChange={fontChangeHandler} fontWindow={isFontWindowOpen} fontWindowToggle={toggleFontWindow} />

        <form className="w-full relative" onSubmit={onFormSubmit}>
          <input onClick={() => setIsFontWindowOpen(false)} className="bg-slate-100 w-full tex md:text-xl font-bold py-5 px-6 rounded-3xl dark:text-white dark:bg-slate-800" type="text" value={userInput} onChange={onInputChange} placeholder="Search for any word…" />
          <img className="absolute inset-y-1/3 right-8" src={SearchIcon} aria-hidden="true" />
        </form>

        <main onClick={() => setIsFontWindowOpen(false)}>
          {isLoading && (
            <div className="mr-auto ml-auto flex justify-center">
              <ThreeDots height="40" width="40" color="gray" />
            </div>
          )}
          {error && <ErrorMsg />}
          {searchResult && (
            <>
              <ResultHeader word={searchResult.word} phonetic={searchResult.phonetic} phonetics={searchResult.phonetics} />

              <div className="meanings">
                <ul>
                  {searchResult.meanings.map((element, i) => {
                    return <Card key={i} partOfSpeech={element.partOfSpeech} definitions={element.definitions} synonyms={element.synonyms} source={searchResult.sourceUrls} />;
                  })}
                </ul>
                <hr />
                <p className="pt-8 text-slate-500 underline ">Source</p>
                <p className="flex items-center ">
                  <a className="underline flex items-center" href={searchResult.sourceUrls[0]} target="_blank" title={searchResult.sourceUrls[0]}>
                    {searchResult.sourceUrls[0]}{" "}
                    <span className="ml-2">
                      <img src={NewWindowIcon} aria-hidden="true" />
                    </span>
                  </a>{" "}
                </p>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
