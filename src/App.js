import React, { useState } from "react";
import NavBar from "./components/NavBar";

const App = (props) => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);

  const handleCounterIncrement = (id) => {
    const counterIndex = counters.findIndex((counter) => counter.id === id);
    counters[counterIndex].value++;
    setCounters([...counters]);
    console.log(counters);
  };

  const handleCounterDecrement = (id) => {
    const counterIndex = counters.findIndex((counter) => counter.id === id);
    counters[counterIndex].value--;
    setCounters([...counters]);
    console.log(counters);
  };

  const handleCounterDelete = (id) => {
    const counterData = counters.filter((counter) => counter.id !== id);
    setCounters([...counterData]);
    console.log(id, counters);
  };

  const handleCounterReset = () => {
    counters.map((counter) => (counter.value = 0));
    setCounters([...counters]);
  };

  const handleCounterRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <NavBar count={counters} />
      <main className="container">
        <div>
          <button
            className="btn btn-success"
            disabled={() => (counters.length === 0 ? "disabled" : "")}
          >
            <i
              className="fa fa-refresh"
              aria-hidden="true"
              onClick={() => handleCounterReset()}
            ></i>
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => handleCounterRestart()}
          >
            <i className="fa fa-recycle" aria-hidden="true"></i>
          </button>
          {counters.map((counter, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-1">
                  <span
                    className={`badge bg-${
                      counter.value === 0 ? "warning" : "primary"
                    }`}
                    style={{ fontSize: "22px", marginTop: "8px" }}
                  >
                    {counter.value === 0 ? "Zero" : counter.value}
                  </span>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      handleCounterIncrement(counter.id);
                    }}
                  >
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-info m-2"
                    disabled={counter.value == 0 ? "disabled" : ""}
                    onClick={() => {
                      handleCounterDecrement(counter.id);
                    }}
                  >
                    <i className="fa fa-minus-circle" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleCounterDelete(counter.id);
                    }}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
