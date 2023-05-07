import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Header from "./components/Header";
import Form from "./components/Form";
import ResultHeader from "./components/ResultHeader";
import Card from "./components/Card";
import ErrorMsg from "./components/ErrorMsg";
import { ThreeDots } from "react-loader-spinner";
import NewWindowIcon from "./assets/images/icon-new-window.svg";
import fetchData from "./api";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [darkToggle, setDarkToggle] = useState(false);
  const [activeFont, setActiveFont] = useState("font-sans");
  const [isFontWindowOpen, setIsFontWindowOpen] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim().length > 0) {
      setIsInputEmpty(false);
      setIsLoading(true);
      fetchData(userInput.trim(), setError, setSearchResult, setIsLoading);
      setUserInput("");
    } else {
      setIsInputEmpty(true);
    }
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

        <Form onFormSubmit={onFormSubmit} fontWindowOpen={setIsFontWindowOpen} input={userInput} onInputChange={onInputChange} isInputEmpty={isInputEmpty} />
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
                    return <Card key={uuid4()} partOfSpeech={element.partOfSpeech} definitions={element.definitions} synonyms={element.synonyms} source={searchResult.sourceUrls} />;
                  })}
                </ul>
                <hr />
                <p className="pt-8 text-slate-500 underline text-xs">Source</p>
                <p className="flex items-center ">
                  <a className="underline  text-xs" href={searchResult.sourceUrls[0]} target="_blank" title={searchResult.sourceUrls[0]}>
                    {searchResult.sourceUrls[0]}{" "}
                    <span className="ml-2 inline-block">
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
