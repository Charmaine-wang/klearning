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

            {/* Temporary */}
            <Route exact path="/course" component={Course} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/handin" component={HandIn} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/media" component={Media} />

            {/* New Course Routes */}
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
