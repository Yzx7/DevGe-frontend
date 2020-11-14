import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoutes from "./Public.routes";
// import Dexie from "dexie";

const Routes = () => {


  // const DBindexed = new Dexie("LasPalmeras");

  // DBindexed.version(1).stores({
  //   user: "title, content, file",
  //   page: "title, content, file",
  // });

  // DBindexed.open().catch((err) => {
  //   console.log(err.stack || err);
  // });



  return (
    <Router>
      <Switch>
        {/* Rutas Privadas */}
        {/* <PrivatedRoutes
          exact
          path="/Intranet/:id"
          component={UserPrivatedRoutes}
          IndexedDB={IndexedDB}
          UserDB={UserDB}
          isAuthenticated={isLoggedIn}
        /> */}
        {/* La Ruta del SignIn */}
        {/* <UserLogin
          exact
          path="/intranet"
          component={Login}
          isAuthenticated={isLoggedIn}
        /> */}
        {/* La Ruta del SignIn */}
        {/* <UserRegister
          exact
          path="/intranetRegister"
          component={SignIn}
          isAuthenticated={isLoggedIn}
        />
        <UserRegister
          exact
          path="/intranetRegister/:id"
          component={SignInWithLink}
          isAuthenticated={isLoggedIn}
        /> */}
        <PublicRoutes path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
