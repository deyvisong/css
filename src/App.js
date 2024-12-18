import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Deyvison");

  const redTitle = false;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React with CSS</h1>
      {/* Component CSS */}
      <MyComponent />
      <p className="my-comp-paragraph">
        This paragraph belongs to MyComponent.js{" "}
      </p>
      <p>This paragraph belongs to App.js </p>
      {/* Inline CSS */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "2px  solid red" }}
      >
        This element was styled inline
      </p>
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px  solid red",
        }}
      >
        This element was styled inline
      </p>
      {/* CSS inline dynamic */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dynamic
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dynamic
      </h2>
      <h2
        style={
          name === "Deyvison"
            ? { color: "magenta", backgroundColor: "#000" }
            : null
        }
      >
        Teste name
      </h2>
      {/* Dynamic class */}
      <h2 className={redTitle ? "red-title" : "title"}>
        This title will have dynamic class
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">My Title</h2>
    </div>
  );
}

export default App;
