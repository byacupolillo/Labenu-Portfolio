import React from "react";
import { Route, Switch } from "react-router-dom"
import Login from '../Screens/Login/index'
import Feed from '../Screens/Feed/index'
import RegisterPage from '../Screens/Register/index'
import ErrorPage from '../Screens/ErrorPage/index'
import PostDetails from '../Screens/PostDetails/index'

const Router = ()  => {
    return (
      <Switch>
  
        <Route  exact path={"/login"}>
         <Login/>
        </Route>
  
        <Route exact path={"/register"}>
          <RegisterPage/>
        </Route>

        <Route exact path={["/feed", "/"]}>
          <Feed/>
        </Route>

        <Route exact path = {'/posts/:id'}>
          <PostDetails />
        </Route>

        <Route>
          <ErrorPage/>
        </Route>

      </Switch>
  
    );
  }
  
  export default Router;