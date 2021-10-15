import React from 'react';

const PizzaForm = (props) => {
    const {
        formChange,
        formValues,
        formSubmit

    } = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        formChange(name, valueToUse)
      }

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
      }

    return (
        <div className='formWrapper'>
            <h2>What kinda zza are ya havin?</h2>

            <form 
                id='pizza-form'
                onSubmit={onSubmit}>

                <label>Name:
                    <input id='name-input'
                        name='name'
                        type='text'
                        value={formValues.name}
                        onChange={onChange}
                    />
                </label>
                <label>Size:
                    <select id='size-dropdown'
                        name='size'
                        onChange={onChange}
                        value={formValues.size}>

                        <option value=''>- Select a size -</option>
                        <option value='small'>Tiny - 8"</option>
                        <option value='medium'>Medium - 10"</option>
                        <option value='large'>Now We're Talking - 12"</option>
                        <option value='jumbo'>Good Choice - 16"</option>
                    </select>
                </label>
                <h4>Toppings:</h4>
                <label>Pepperoni
                <input 
                    type='checkbox'
                    name='pepperoni'
                    onChange={onChange}
                    checked={formValues.pepperoni}
                />
                </label>

                <label>Olives
                <input 
                    type='checkbox'
                    name='olives'
                    onChange={onChange}
                    checked={formValues.olives}
                />
                </label>

                <label>Broccoli
                <input 
                    type='checkbox'
                    name='broccoli'
                    onChange={onChange}
                    checked={formValues.broccoli}
                />
                </label>

                <label>Mushrooms
                <input 
                    type='checkbox'
                    name='mushrooms'
                    onChange={onChange}
                    checked={formValues.mushrooms}
                />
                </label>

                <label>Special Instructions:
                    <input id='special-text'
                        name='specialText'
                        type='text'
                        onChange={onChange}
                        value={formValues.specialText}
                    />
                </label>
                <button 
                    id='submit-button' 
                    style={{ width:'fit-content,', alignSelf: 'center'}}
                    > Order Pie</button>



            </form>


        </div>
    )
}


export default PizzaForm;
