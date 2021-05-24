import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import routeArray from "./constants/data"

import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import { NoMatch } from "./pages"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Route render={({ location }) => (
          <TransitionGroup component={null}>
            <CSSTransition
              timeout={300}
              classNames='main'
              key={location.key}
              unmountOnExit
            >
              <Switch>
                {routeArray.map( (item, i) => (
                  <Route exact path={item.path} key={i}>
                    <Header className={`header ${item.contentClass ? item.contentClass : item.path === '/' ? 'home' : item.path.slice(1)}`} />
                    <item.page className={`main ${item.contentClass ? item.contentClass : item.path === '/' ? 'home' : item.path.slice(1)}`} />
                  </Route>
                ))}
                <Route>
                  <Header className="header nomatch"/>
                  <NoMatch className="main nomatch"/>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
