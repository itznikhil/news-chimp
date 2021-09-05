import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ProgressContext} from "./Helper/context";
import LoadingBar from "react-top-loading-bar";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default function App() {
  const [progress, setProgress] = useState(0);
  const endPoints = [
    "/",
    "/business",
    "/entertainment",
    "/health",
    "/science",
    "/sports",
    "/technology",
  ];
  return (
    <ProgressContext.Provider value={{progress, setProgress}}>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <NavBar endPoints={endPoints.slice(1)}/>
        <Switch>
          {endPoints.map((endPoint, index) => {
            return (
              <Route exact path={endPoint} key={index}>
                <News category={endPoint.slice(1)} />
              </Route>
            );
          })}
        </Switch>
      </Router>
    </ProgressContext.Provider>
  );
}
