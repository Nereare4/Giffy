import {useState} from "react";
import register from "../services/register";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateFields = values => {
    const errors ={}
    if (!values.username) {
        errors.username = 'Required username'
    }
    if (!values.password) {
        errors.password = 'Required password'
    }else if (values.password.length < 6) {
        errors.password = 'Length must be greater than 6'
    }

    return errors
}

const initialValues = {username: '', password: ''}

export default function Register() {
    const [registered, setRegistered] = useState(false)

    if (registered) {
        return <h4>
          Congratulations ✅! You've been successfully registered!
        </h4>
      }
    

    //Formik es una Render prop => es una prop que se renderiza, es el children en función
    return <> 
        <Formik
            initialValues={initialValues}
            validate = {validateFields}
            onSubmit={(values, {setFieldError}) =>{
                return register(values)
                .then(() => {
                    setRegistered(true)
                })
                .catch(() =>{
                    setFieldError('username', 'This username is not valid')
                })
            }}
        >
            {
                ({errors, isSubmitting}) => 
                <Form className="form">
                    <Field className={errors.username ? 'error' : ''} name="username" placeholder="Username"/>
                    <ErrorMessage className='form-error' name='username' component='small' />
                    <Field className={errors.password ? 'error' : ''} name="password" placeholder="Password" type='password'/>
                    <ErrorMessage className='form-error' name='password' component='small' />
                    <button className="btn" disabled={isSubmitting}>Sign up</button>
                </Form>
            }
        </Formik>
    </>
    
}