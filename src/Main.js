import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './UI/Homepage';
import Form from './UI/Form2';
import Error from './UI/Error';

const Main = ()  => (
    
    <Switch> 
    <Route exact path="/">  <Homepage/> </Route>
    <Route path="/form"> <Form /> </Route>
    <Route path="*">  <Error/> </Route> 
    </Switch>
)

export default Main;
