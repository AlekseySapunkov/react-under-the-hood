import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const showPararaphHandler = () =>{
    setShowParagraph(true)
    if(showParagraph === true){
      setShowParagraph(false)
    }
  }
  return (
    <React.Fragment>
    <div className="app">
      <h1>React под Капотом</h1>
      {showParagraph &&<p>Новый текст</p>}
    </div>
    <button onClick={showPararaphHandler}>Нажми меня</button>
</React.Fragment>
  );
}

export default App;
