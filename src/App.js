import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import CourseInfo from "./pages/CourseInfo";
import CourseOverview from "./pages/CourseOverview";
import CourseFlow from "./pages/CourseFlow";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/course/overview" component={CourseOverview} />
            <Route exact path="/course/info" component={CourseInfo} />
            <Route exact path="/course/flow" component={CourseFlow} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
