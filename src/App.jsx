import { useState, useEffect } from "react";
import Header from "./components/Header";
import ResultHeader from "./components/ResultHeader";
import Card from "./components/Card";
import ErrorMsg from "./components/ErrorMsg";
import { ThreeDots } from "react-loader-spinner";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [darkToggle, setDarkToggle] = useState(false);
  const fetchData = async (input) => {
    setError(false);
    setSearchResult(null);
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      const [data] = await response.json();
      setSearchResult(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData(userInput);
    setUserInput("");
  };

  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const themeChangeHandler = () => {
    setDarkToggle(!darkToggle);
  };
  return (
    <div className={`w-full min-h-screen ${darkToggle ? "dark bg-black text-white " : ""} `}>
      <div className={`max-w-3xl mr-auto ml-auto px-6 pb-20 container md:px-10 md:pb-28 `}>
        <Header onClick={themeChangeHandler} theme={darkToggle} />

        <form className="w-full " onSubmit={onFormSubmit}>
          <input className="bg-slate-100 w-full text-xl font-bold py-5 px-6 rounded-3xl dark:text-red-50" type="text" value={userInput} onChange={onInputChange} placeholder="Search for any word…" />
        </form>

        <main>
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
                <p>
                  <a className="underline" href={searchResult.sourceUrls[0]} target="_blank" title={searchResult.sourceUrls[0]}>
                    {searchResult.sourceUrls[0]}
                  </a>
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
