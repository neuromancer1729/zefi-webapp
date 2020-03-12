import React from "react";
import "./../styles/global.scss";
import IndexPage from "./index";
import AddFundsPage from "./addfunds";
import WithdrawFundsPage from "./withdrawfunds";
import { Switch, Route, Router } from "./../util/router.js";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/add-funds" component={AddFundsPage} />

          <Route exact path="/withdraw-funds" component={WithdrawFundsPage} />

          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
