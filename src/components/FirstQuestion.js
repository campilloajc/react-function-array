import React, { useState } from "react";

export const FirstQuestion = () => {
  const [state, setState] = useState({
    numberOne: '',
    numberTwo: '',
    signo: "+",
    result: 0,
  });

  const operations = (a , b, signo) => {
    if ( a === '' || b === '') return 1;

    const firtNumber = parseFloat(a);
    const secondNumber = parseFloat(b);

    switch (signo) {
      case "+":
        return firtNumber + secondNumber;
      case "-":
        return firtNumber - secondNumber;
      case "*":
        return firtNumber * secondNumber;
      case "/":
        if (secondNumber === 0) return Error("no se puede dividir por 0");
        return a / b;
      default:
        return 1;
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const resultOperation = (a, b, signo) => {
    
    setState((prev) => ({ ...prev, result: operations(a, b, signo) }));
  };



  return (
    <div>
      <p>Punto a.</p>
      <input
        name="numberOne"
        type="number"
        placeholder="primer numero"
        value={state.numberOne}
        onChange={handleChange}
      />

      <input
        name="numberTwo"
        type="number"
        placeholder="segundo numero"
        value={state.numberTwo}
        onChange={handleChange}
      />

      <label>
        signo :
        <select value={state.signo} name="signo" onChange={handleChange}>
          <option value="+">Suma</option>
          <option value="-">Resta</option>
          <option value="*">Multiplicación</option>
          <option value="/">División</option>
        </select>
      </label>

      <p>{state.result}</p>

      <button
        onClick={() =>
          resultOperation(state.numberOne, state.numberTwo, state.signo)
        }
      >
        operación
      </button>
    </div>
  );
};
