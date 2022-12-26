import { useState } from "react";
import "./App.css";
import { FirstQuestion } from "./components/FirstQuestion";
import { SecondQuestion } from "./components/SecondQuestion";
const arrayData = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function App() {
  const [state, setState] = useState({
    listArrayNumber: arrayData,
  });

  const transformaDataArray = () => {

    const copyArray = [...state.listArrayNumber];

    const result = copyArray.flatMap((item) => item);

    setState((prev) => ({ ...prev, listArrayNumber: result }));

  };

  return (
    <div className="App">

       <FirstQuestion/>

       <SecondQuestion/>

      <div>
        <p>punto c.</p>
        <p>{JSON.stringify(state.listArrayNumber)}</p>

        <button onClick={transformaDataArray}>Transformar</button>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, listArrayNumber: arrayData }))
          }
        >
          Regrsar
        </button>

      </div>
    </div>
  );
}

export default App;
