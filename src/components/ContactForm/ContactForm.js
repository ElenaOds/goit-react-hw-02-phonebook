import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

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

const ErrorText = styled.p`
color: #FF0000;
margin: 0;
`;

const FormData = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  align-items: center;
  font-size: 20px;
  text-align: left;
  width: 30%;
`;

const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:focus,
  &:hover {
   border: 3px solid #89CFF0;
   outline: inherit;
`;

const Button = styled.button`
display: inline-block;
width: 150px;
padding: 10px;
background-color: #fff;
font-size: 14px;
box-shadow: 3px 6px 20px rgba(0.12, 0.12, 0.12, 0.12), 
1px 3px 4px rgba(0, 0, 0, 0.14), 
0px 0px 2px rgba(0, 0, 0, 0.2);
border-radius: 5px;
border: inherit;
cursor: pointer;
text-transform: capitalize;

&:focus,
&:hover {
    border: 3px solid #89CFF0;
    outline: inherit;
}
`;

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