import { useState } from "react";
import Loading from "./components/Loading";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />;
  }
  return <h2>Tours project aaaaaaa</h2>;
}

export default App;
