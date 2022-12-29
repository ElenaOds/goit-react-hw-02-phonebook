import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ErrorText = styled.p`
color: #FF0000;
margin: 0;
`;

export const FormData = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  align-items: center;
  font-size: 20px;
  text-align: left;
  width: 30%;
`;

export const Input = styled(Field)`
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

export const Button = styled.button`
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