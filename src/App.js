import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import * as ROUTES from "./constants/routes"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import { Home, About, Listen, Shows, Contact, NoMatch, Milwaukee, SelfTitled, Millers } from "./pages"

function App() {

  const routeArray = [
    {
      path: ROUTES.HOME,
      page: Home
    },
    {
      path: ROUTES.ABOUT,
      page: About
    },
    {
      path: ROUTES.LISTEN,
      page: Listen
    },
    {
      path: ROUTES.SHOWS,
      page: Shows
    },
    {
      path: ROUTES.CONTACT,
      page: Contact
    },
    {
      path: ROUTES.MILWAUKEE,
      page: Milwaukee,
      contentClass: 'listen'
    },
    {
      path: ROUTES.SELFTITLED,
      page: SelfTitled,
      contentClass: 'listen'
    },
    {
      path: ROUTES.MILLERS,
      page: Millers,
      contentClass: 'listen'
    }
  ]


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
