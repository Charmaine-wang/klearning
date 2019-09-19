import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Overview from "./pages/TempCourseOverviewPage";
import HandIn from "./pages/TempHandInPage";
import Quiz from "./pages/TempQuizPage";
import Media from "./pages/TempMediaPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/course" component={Course} />
            <Route path="/profile" component={Profile} />
            <Route path="/overview" component={Overview} />
            <Route path="/handin" component={HandIn} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/media" component={Media} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
