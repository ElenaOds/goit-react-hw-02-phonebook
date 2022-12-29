import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {ErrorText, FormData, Label, Input, Button} from './ContactForm.styled';

const schema = yup.object().shape({
    name: yup.string().required('Please enter valid number'),
    number: yup.number().required('Please enter valid number'),
})

const FormError = ({ name }) => {
    return (
        <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}/>
    )
}

const initialValues = {
    name: '',
    number: '',
};

export const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} 
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <FormData autoComplete='off'>
                <Label htmlFor='name'>
                    Name 
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    <FormError component="div" name="name" />
                </Label>
                <Label htmlFor='number'>
                    Number 
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    <FormError component="div" name="number" />
                </Label>
                <Button type='submit'>Add contact</Button>

            </FormData>
        </Formik>
    )
}