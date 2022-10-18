import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState, useRef } from "react";

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
/** const content = [
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
} */

//useTitle
/** const useTitle = (inititialTitle) => {
  const [title, setTitle] = useState(inititialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return <div className="App"></div>;
} */

// useClick
/** const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListner("click", onClick);
      }
    };
  }, []);
  return element;
};
function App() {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
} */

// useConfirm
/** const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  if (typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
function App() {
  const deleteWorld = () => console.log("delete world...");
  const about = () => console.log("Abouted");
  const confirmDelete = useConfirm("Atr you sure", deleteWorld, about);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
} */

// usePreventLeave
const usepreventLeave = () => {
  const listener = (event) => {
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
function App() {
  const { enablePrevent, disablePrevent } = usepreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
export default App;
