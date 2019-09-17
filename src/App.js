import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/course" component={Course} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
