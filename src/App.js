import styled from "styled-components";
import "./App.css";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    document.title = "Facebook";
  }, []);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <AppContent>
            <Sidebar />
            <Feed />
            <Widget />
          </AppContent>
        </>
      )}
    </div>
  );
}

const AppContent = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 60px;
  padding-bottom: 100px !important;
`;

export default App;
