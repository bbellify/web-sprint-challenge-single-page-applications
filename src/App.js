import React from "react";
import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup'

import './App.css';



import PizzaForm from './PizzaForm';
import formSchema from './formSchema'

const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    olives: false,
    broccoli: false,
    mushrooms: false,
    specialText: '',

  }

  const initialErrors = {
    name: '',
    size: '',
    specialText: '',
  }

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrors);


  const validate = (name,value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const formChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]:value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.size.trim(),
      toppings: ['pepperoni', 'olives', 'broccoli', 'mushrooms'].filter(hobby => !!formValues[hobby]),
      specialText: formValues.specialText
    }

    console.log(newPizza);
    setFormValues(initialFormValues);
  }



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
          <PizzaForm 
            formChange={formChange} 
            formValues={formValues} 
            formSubmit={formSubmit}
            formErrors={formErrors}/>
        </Route>

        <Route exact path={`/`}>
          <h2>Home Here</h2>
          {/* <img src={`https://pixabay.com/images/id-3309418/`} alt={'slice of zza'}/> */}
        </Route>
    </div>


  );
};
export default App;
