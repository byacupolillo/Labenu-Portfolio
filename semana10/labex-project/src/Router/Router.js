import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CreateTripPage from "../Components/CreateTripPage"
import HomePage from "../Components/HomePage"
import ListTripsPage from "../Components/ListTripsPage"
import LoginPage from "../Components/LoginPage"
import TripDetailsPage from "../Components/TripDetailsPage"
import ApplicationForm from "../Components/ApplicationForm"

function Router() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
  
        <Route exact path="/listTrips">
          <ListTripsPage/>
        </Route>
  
        <Route  exact path="/login">
         <LoginPage/>
        </Route>
  
        <Route exact path="/tripDetails">
          <TripDetailsPage/>
        </Route>
  
        <Route exact path="/createTrip">
          <CreateTripPage/>
        </Route>

        <Route exact path="/applicationForm">
          <ApplicationForm/>
        </Route>
  
      </Switch >
    </BrowserRouter>
  
  
    );
  }
  
  export default Router;
  