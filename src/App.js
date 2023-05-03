import './App.css';
//import ListOfGifs from './components/ListOfGifs';
import React, { Suspense } from "react";
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
//import Home from './pages/Home'
import { Link, Route, Switch } from 'wouter';
import Context from './context/StaticContext';
import { GifsContextProviders } from './context/GifsContext';
import ErrorPage from './pages/ErrorPage';

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Context.Provider value={{name: 'nerea', suscribeteAlCanal: true}}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to='/'>
            <figure className="App-logo">
                <img alt="Giffy logo" src="/logo.png" />
              </figure>
            </Link>
            <GifsContextProviders>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route
                    component={SearchResults}
                    path="/search/:keyword/:rating?"
                  />
                <Route component={Detail} path="/gif/:id" />
                <Route component={ErrorPage} path="/:rest*" />
              </Switch>
            </GifsContextProviders>
          </section>
        </Suspense>
      </div>
    </Context.Provider>
  );
}

export default App;
  