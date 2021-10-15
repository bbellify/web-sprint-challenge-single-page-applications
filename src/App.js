import React from "react";
import { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios'


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
  const [disabled, setDisabled] = useState(true)


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
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      olives: formValues.olives,
      broccoli: formValues.broccoli,
      mushrooms: formValues.mushrooms,
      specialText: formValues.specialText
    }

    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        console.log(res)
      })
      .catch( err => {
        console.error(err)
      })
      .finally(
        setFormValues(initialFormValues)
      )
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className='App'>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={`/pizza`} id='order-pizza'>Order 'zza</NavLink>
        </nav>
      </header>


        <Route path={`/pizza`}>
          <PizzaForm 
            formChange={formChange} 
            formValues={formValues} 
            formSubmit={formSubmit}
            formErrors={formErrors}
            disabled={disabled}
            />
        </Route>

        <Route exact path={`/`}>
          <h2>Home Here</h2>
          {/* <img src={('./Assets/Pizza.jpg')} alt={'slice of zza'}/> */}
        </Route>
    </div>


  );
};
export default App;
