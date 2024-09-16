import { useState, useEffect } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY < 50) {
        setCollapsed(false);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <div class={`toaster ${collapsed ? "collapsed" : ""}`}>
        <div class="close">
          <button
            class="close-toaster"
            id="closeToaster"
            onClick={() => setCollapsed(true)}
          >
            <img src="./close.svg" alt="Close" /> Close
          </button>
        </div>
        <img src="./cover.jpg" alt="Compressed.fm Cover" class="cover" />
        <h1>
          GET FREE
          <br />
          STUFF
          <br />
          IN YOUR INBOX
        </h1>
        <p>
          We try to include additional information and companion resources with
          each podcast episode. Sign up now to be included in the fun.
        </p>
        <form action="">
          <div class="field">
            <label for="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>
          <button class="submit" id="submit">
            <img src="./arrow.svg" alt="Arrow" />
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
