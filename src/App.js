import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import AllCountries from './components/AllCountries';
import CheapCountries from './components/CheapCountries';
import CountriesVisited from './components/CountriesVisited';
import CountriesYouShouldVisit from './components/CountriesYouShouldVisit';
import ExpensiveCountries from './components/ExpensiveCountries';
import ErrorPage from './components/ErrorPage';

// Const Variable for all REST COUNTRIES API (LARGE DATA)
const ALL_COUNTRIES = "https://restcountries.eu/rest/v2/all"

class App extends Component {
 
  componentDidMount() {
    fetch(ALL_COUNTRIES)
      .then(response => response.json())
      .then(Countrydata => {console.log(Countrydata)});
  }


  render(){
    return(
      <div className="App">
      <div>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/all-countries/" component={AllCountries} />
              <Route path="/cheap-countries/" component={CheapCountries} />
              <Route path="/countries-visited/" component={CountriesVisited} />
              <Route path="/countries-you-should-visit/" component={CountriesYouShouldVisit} />
              <Route path="/expensive-countries/" component={ExpensiveCountries} />
              <Route path="/404-not-found/" component={ErrorPage} />
          </Switch>
    </div>
  </div>
    )
  }
}
export default App;