import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";

import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import Container from "./components/Container";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loading from "./components/Loader";

import styles from "./App.module.css";

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /*webpackChunkName: "home-view" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage/LoginPage' /*webpackChunkName: "login-view" */)
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage/RegisterPage' /*webpackChunkName: "register-view" */)
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage/ContactsPage' /*webpackChunkName: "contacts-view" */)
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())

  }, [dispatch])

  return (
    <Container>
      <AppBar />
      <h1 className={styles.title}>Phonebook</h1>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={routes.home}>
            <HomePage />
          </Route>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute
            path={routes.contacts}
            redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>

    </Container>
  )
}



