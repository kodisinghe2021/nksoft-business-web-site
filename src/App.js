import React from "react";
import "./App.scss";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About.jsx";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Price from "./components/pricing/Price";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/courses" exact component={CourseHome} />
          <Route path="/team" exact component={Team} />
          <Route path="/pricing" exact component={Price} />
          <Route path="/journal" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
