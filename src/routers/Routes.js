import React from 'react';
import { Route, Switch } from "react-router-dom";
import AllCountries from '../components/AllCountries';
import CheapCountries from '../components/CheapCountries';
import CountriesVisited from '../components/CountriesVisited';
import CountriesYouShouldVisit from '../components/CountriesYouShouldVisit';
import ExpensiveCountries from '../components/ExpensiveCountries';
import ErrorPage from '../components/ErrorPage';

const Router = () => {
  return (
    <div className="Router">
        <div>
            {/* <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/all-countries/" component={AllCountries} />
                <Route path="/cheap-countries/" component={CheapCountries} />
                <Route path="/countries-visited/" component={CountriesVisited} />
                <Route path="/countries-you-should-visit/" component={CountriesYouShouldVisit} />
                <Route path="/expensive-countries/" component={ExpensiveCountries} />
                <Route path="/404-not-found/" component={ErrorPage} />
            </Switch> */}
      </div>
    </div>
  );
}

export default Router;