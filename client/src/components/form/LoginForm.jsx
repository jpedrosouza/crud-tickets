import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import '../style/style.css'
import Axios from 'axios'


export default function LoginForm() {

    const handleClickLogin = (values) => {
        Axios.post('http://localhost:3001/login', {
            email: values.email,
            password: values.password, 
        }).then((response) => {
            console.log(response)
        })
    }

    const validationLogin = yup.object().shape({
        email: yup.string().email('Insira um e-mail válido').required('O e-mail é orbigatório'),
        password: yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres').required('A senha é obrigatória')
    })

    const LoginFormGroup = styled.div`
        display: grid;
        align-items: center
    `

    return (
        <React.Fragment>
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                <Form className="login-form">
                    <LoginFormGroup>
                        <Field className="form-field" type="email" name="email" placeHolder = "Email"/>
                        <ErrorMessage className="form-error" component="span" name="email" />
                    </LoginFormGroup>
                    <LoginFormGroup>
                        <Field className="form-field" type="password" name="password" placeHolder = "Senha"/>
                        <ErrorMessage className="form-error" component="span" name="password" />
                    </LoginFormGroup>
                    <button type="submit">ENTRAR</button>
                </Form>
            </Formik>
        </React.Fragment>
    )
}