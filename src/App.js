import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

//usestate
/** function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Item : {item}</h1>
      <button onClick={incrementItem}>IncrementItem</button>
      <button onClick={decrementItem}>DecrementItem</button>
    </div>
  );
} */

//useInput
/** const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Hi", maxLen);
  return (
    <div className="App">
      <h1>Input</h1>
      <input placeholder="hahahaha" {...name} />
    </div>
  );
} */

//useTabs
const content = [
  { tab: "Section 1 ", content: "I'm the content of the Section 1" },
  { tab: "Section 2 ", content: "I'm the content of the Section 2" },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setcurrentIndex };
};
function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
