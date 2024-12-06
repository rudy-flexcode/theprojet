import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFacts = useCallback(() => {
    setLoading(true);
    axios
      .get("https://meowfacts.herokuapp.com/")
      .then((response) => {
        setFacts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchFacts();
  }, [fetchFacts]);

  return (
    <div className="App">
      <header className="header">facts about cats 😻</header>
      <main className="content">
        <button type="button" onClick={fetchFacts} className="fetch-button">
          new fact
        </button>
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <div className="fact-list">
            {facts.map((fact) => (
              <div key={fact} className="cat-card">
                <div className="cat-face">
                  <p>{fact}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
