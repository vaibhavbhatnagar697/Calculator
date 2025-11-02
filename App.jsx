import { useEffect, useState } from "react";
import "./App.css";
function App() {
  let [display, setdisplay] = useState("");
  let [btn, setbtn] = useState(false);

  let output = () => {
    if (display.includes("+", "-", "/", "*")) {
      let value = eval(display);
      setdisplay(value);
    } else if (display.includes("log")) {
      let val = display.split("");
      let res = Math.log(val[3]);
      setdisplay(res);
    } else if (display.includes("!")) {
      let val = display.split("");
      if (val[1] == "!") {
        let result = 1;
        for (let i = 2; i <= val[0]; i++) {
          result *= i;
          console.log(result);
          setdisplay(result);
        }
      } else {
        let value = val[0] + val[1];
        let result = 1;
        for (let i = 2; i <= value; i++) {
          result *= i;

          setdisplay(result);
        }
      }
    } else if (display.includes("sin")) {
      let val = display.split("");
      let data = val[3] + val[4];
      let value = Math.sin(data);
      setdisplay(value);
    } else if (display.includes("cos")) {
      let val = display.split("");

      let data = val[3] + val[4];
      let value = Math.cos(data);
      setdisplay(value);
    } else if (display.includes("√")) {
      let val = display.split("");
      if (val[2] !== undefined) {
        let value = val[1] + val[2];

        let data = Math.sqrt(value);
        setdisplay(data);
      } else {
        let data = Math.sqrt(val[1]);
        setdisplay(data);
      }
    }
  };
  let remove = () => {
    setdisplay("");
  };
  let grid = () => {
    setdisplay(display.slice(0, -1));
  };

  return (
    <>
      <div class="calculator">
        <input
          type="text"
          class="display"
          id="display"
          onChange={(event) => setdisplay(event.target.value)}
          readOnly
          value={display}
        />

        <div className={`buttons ${btn ? "" : "grid"}`}>
          <button onClick={remove}>C</button>
          <button onClick={() => setdisplay(display + "/")}>/</button>
          <button onClick={() => setdisplay(display + "*")}>*</button>
          <button onClick={grid}>←</button>
          <button
            className={btn ? "" : "main"}
            onClick={() => setdisplay(display + "ln")}
          >
            ln
          </button>
          <button onClick={() => setdisplay(display + "7")}>7</button>
          <button onClick={() => setdisplay(display + "8")}>8</button>
          <button onClick={() => setdisplay(display + "9")}>9</button>
          <button onClick={() => setdisplay(display + "-")}>-</button>
          <button
            className={btn ? "" : "main"}
            onClick={() => setdisplay(display + "!")}
          >
            !
          </button>
          <button onClick={() => setdisplay(display + "4")}>4</button>
          <button onClick={() => setdisplay(display + "5")}>5</button>
          <button onClick={() => setdisplay(display + "6")}>6</button>
          <button onClick={() => setdisplay(display + "+")}>+</button>
          <button
            className={btn ? "" : "main"}
            onClick={() => setdisplay(display + "sin")}
          >
            sin
          </button>
          <button onClick={() => setdisplay(display + "1")}>1</button>
          <button onClick={() => setdisplay(display + "2")}>2</button>
          <button onClick={() => setdisplay(display + "3")}>3</button>
          <button onClick={output}>=</button>
          <button
            className={btn ? "" : "main"}
            onClick={() => setdisplay(display + "cos")}
          >
            cos
          </button>
          <button class="zero" onClick={() => setdisplay(display + "0")}>
            0
          </button>
          <button onClick={() => setdisplay(".")}>.</button>
          <button onClick={() => setbtn(!btn)}>
            {btn ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
          <button
            className={btn ? "" : "main"}
            onClick={() => setdisplay(display + "√")}
          >
            &#8730;
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
