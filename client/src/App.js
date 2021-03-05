import "./App.css";
import CreateTemplate from "./components/CreateTemplate";
import Templates from "./components/Templates";
import EditTemplate from "./components/EditTemplate";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [templates, setTemplate] = useState([]);

  useEffect(() => {
    const getTemplates = async () => {
      const res = await axios.get("api/template");
      setTemplate(res.data);
    };
    getTemplates();
  }, []);

  return (
    <Router>
      {templates.length < 1 ? (
        <Route path="/" exact>
          <CreateTemplate />
        </Route>
      ) : (
        <>
          <Route path="/" exact>
            <Templates templates={templates} />
          </Route>
          <Route path="/createtemplate" exact>
            <CreateTemplate />
          </Route>
          <Route path="/id:id">
            <EditTemplate templates={templates} />
          </Route>
        </>
      )}
    </Router>
  );
}

export default App;
