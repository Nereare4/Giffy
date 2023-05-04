import './App.css';
import React, { Suspense } from "react";
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Link, Route, Switch } from 'wouter';
import { GifsContextProviders } from './context/GifsContext';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import { UserContextProvider } from './context/UserContext';

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header/>
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
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
                <Route component={ErrorPage} path="/:rest*" />
              </Switch>
            </GifsContextProviders>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

  