import React from "react";
import { Route, Link } from 'react-router-dom';
import './App.css';


import PizzaForm from "./PizzaForm";

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={`/pizza`} id='order-pizza'>Order 'zza</Link>
        </nav>
      </header>


        <Route path={`/pizza`}>
          <PizzaForm />
        </Route>

        <Route exact path={`/`}>
          <h2>Home Here</h2>
        </Route>
    </div>


  );
};
export default App;
