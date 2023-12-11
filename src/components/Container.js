import { useState } from "react";
import Form from "./Form";
import Output from "./Output";

const Container = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [peopleError, setPeopleError] = useState(true);
  const [tip, setTip] = useState({
    active: "",
    value: 0,
  });
  const [reset, setReset] = useState(false);

  const addTip = (active, btnValue) => {
    setTip({ active: active, value: btnValue >= 0 ? btnValue : 0 });
  };

  const onReset = () => {
    if (reset) {
      setBill("");
      setPeople("");
      setTip({ active: "", value: 0 });
      setReset(false);
    }
  };

  const resetPeople = (value) => {
    if (value > 0) {
      setPeople(value);
      setPeopleError(false);
    } else {
      setPeople('');
      setPeopleError(true);
    }
  };

  return (
    <div className="container" onChange={() => setReset(true)}>
      <Form
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={resetPeople}
        tip={tip}
        addTip={addTip}
        setReset={setReset}
        peopleError={peopleError}
      />
      <Output
        bill={bill}
        people={people}
        tip={tip.value}
        resetCalc={onReset}
        reset={reset}
      />
    </div>
  );
};

export default Container;
