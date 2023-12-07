import { useState } from "react";
import Header from "./components/Header";
import Fv from "./components/Fv";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Fv />
      </main>
    </>
  );
}

export default App;
