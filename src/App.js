import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import NavBar from "./components/NavBar/NavBar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/discoverMoviesPage/:searchText"
          component={DiscoverMoviesPage}
        />
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/aboutPage" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
