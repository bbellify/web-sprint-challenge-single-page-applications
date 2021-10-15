import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter your name')
        .min(2, 'name must be at least 2 characters'),
    
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'jumbo'], 'Please select a size'),

    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    broccoli: yup.boolean(),
    mushrooms: yup.boolean(),
    
    specialText: yup
        .string()
})

export default formSchema