import React, { useState, useEffect } from "react";
import Shift from "./components/Shift";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <div>{loading === true ? <Loader /> : <Shift />}</div>
    </>
  );
}

export default App;
