import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState, useRef } from "react";
import useAxios from "./useAxios";

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
/** const usepreventLeave = () => {
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
} */

//useBeforeLeave
/** const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
};

function App() {
  const begForLife = () => console.log("Pls dint leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
} */

// useFadeIn
/** const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  return { ref: element, style: { opacity: 0 } };
};

function App() {
  const fadeInH1 = useFadeIn(3, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>안녕하세요.</p>
    </div>
  );
} */

// useNetwrok
/** const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "OnLine" : "Offline"}</h1>
    </div>
  );
} */

// useScroll
/** const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return state;
};
function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
} */
// useFullscreen
/** const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

function App() {
  const [isScreen, setIsscreen] = useState(false);
  const onFulls = (isFull) => {
    console.log(isFull);
    console.log(isFull ? "we are Full" : "we are small");
    setIsscreen(isFull);
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button
          style={{ display: isScreen ? "block" : "none" }}
          onClick={exitFull}
        >
          Smallscreen
        </button>
      </div>
      <button
        style={{ display: isScreen ? "none" : "block" }}
        onClick={triggerFull}
      >
        Make fullscreen
      </button>
    </div>
  );
} */
// useAxios

function App() {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `loading:${loading}\nerror:${error}\ndata:${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading.."}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
export default App;
