import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import '../style/style.css'
import Axios from 'axios'


export default function RegisterForm() {

    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
           name: values.name,
           lastName: values.lastName,
           email: values.email,
           password: values.password,
        }).then((response) => {
            console.log(response);
        })
    }

    const validationRegister = yup.object().shape({
        name: yup.string().min(2, 'O nome deve conter no mínimo duas letras').required('O nome é obrigatório'),
        lastName: yup.string().min(2, 'O sobrenome deve tconter no mínimo duas letras').required('O sobrenome é obrigatório'),
        email: yup.string().email('Insira um e-mail válido').required('O e-mail é orbigatório'),
        password: yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres').required('A senha é obrigatória'),
        passwordCheck: yup.string().oneOf([yup.ref('password'), null], 'A senha não é igual').required('Confirmação de senha obrigatória')
    })

    const LoginFormGroup = styled.div`
        display: grid;
        align-items: center
    `

    return (
        <React.Fragment>
            <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                <Form className="register-form">
                    <LoginFormGroup>
                        <Field className="form-field" name="name" placeHolder = "Nome"/>
                        <ErrorMessage className="form-error" component="span" name="name" />
                    </LoginFormGroup>
                    <LoginFormGroup>
                        <Field className="form-field" name="lastName" placeHolder = "Sobrenome"/>
                        <ErrorMessage className="form-error" component="span" name="lastName" />
                    </LoginFormGroup>
                    <LoginFormGroup>
                        <Field className="form-field" type="email" name="email" placeHolder = "Email"/>
                        <ErrorMessage className="form-error" component="span" name="email" />
                    </LoginFormGroup>
                    <LoginFormGroup>
                        <Field className="form-field" type="password" name="password" placeHolder = "Senha"/>
                        <ErrorMessage className="form-error" component="span" name="password" />
                    </LoginFormGroup>
                    <LoginFormGroup>
                        <Field className="form-field" type="password" name="passwordCheck" placeHolder = "Confirme sua senha"/>
                        <ErrorMessage className="form-error" component="span" name="passwordCheck" />
                    </LoginFormGroup>
                    <button type="submit">CADASTRAR</button>
                </Form>
            </Formik>
        </React.Fragment>
    )
}