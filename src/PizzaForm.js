import React from 'react';

const PizzaForm = (props) => {
    return (
        <div className='formWrapper'>
            <h2>What kinda zza are ya havin?</h2>

            <form id='pizza-form'>
                <label>Name:
                    <input id='name-input'
                        name='name-input'
                        type='text'
                        // value={formValues.first_name}
                        // onChange={onChange}
                    />
                </label>
                <label>Size:
                    <select id='size-dropdown'>
                        <option value=''>- Select a size -</option>
                        <option value='small'>Tiny - 8"</option>
                        <option value='medium'>Medium - 10"</option>
                        <option value='large'>Now We're Talking - 12"</option>
                        <option value='jumbo'>Good Choice - 16"</option>
                    </select>
                </label>
                <label>Toppings:
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        // onChange={onChange}
                        // checked={formValues.termsOfService === true }
                    />
                    <input 
                        type='checkbox'
                        name='olives'
                        // onChange={onChange}
                        // checked={formValues.termsOfService === true }
                    />
                    <input 
                        type='checkbox'
                        name='broccoli'
                        // onChange={onChange}
                        // checked={formValues.termsOfService === true }
                    />
                    <input 
                        type='checkbox'
                        name='mushrooms'
                        // onChange={onChange}
                        // checked={formValues.termsOfService === true }
                    />
                </label>
                <label>Special Instructions:
                    <input id='special-text'
                        name='special-text'
                        type='text'
                    />
                </label>



            </form>


        </div>
    )
}


export default PizzaForm;
