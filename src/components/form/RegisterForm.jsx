import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from './Input'
import styled from 'styled-components'
import "../style/style.css"
 

export default function RegisterForm() { 

    const formRef = useRef(null)

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().min(2, 'O nome deve conter no mínimo duas letras').required('O nome é obrigatório'),
                lastName: Yup.string().min(2, 'O sobrenome deve conter no mínimo duas letras').required('O sobrenome é obrigatório'),
                email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
                password: Yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres').required('A senha é obrigatória'),
                passwordCheck: Yup.string().oneOf([Yup.ref('password'), null], 'A senha não é a mesma').required('Confirme sua senha')
    
            })
           
            await schema.validate(data, {
                abortEarly: false,
            })

            console.log(data)

            formRef.current.setErrors({})

            reset()
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {}

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message
                })

                formRef.current.setErrors(errorMessages)
            }
        }
    }


    const Button = styled.div`
        @font-face {
            font-family: 'Roboto Regular';
            src: url('/fonts/Roboto/Roboto-Regular.ttf');
        }

       .button {
        font-family: Roboto Regular;
        font-style: normal;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF;
        cursor: pointer;
       }
    `

    return(
        <React.Fragment>
            <Form className="forms" ref={formRef} onSubmit={handleSubmit}>
                <Input className="input" type="text" name="name" placeholder="Nome" />
                <Input className="input" type="text" name="lastName" placeholder="Sobrenome" />
                <Input className="input" type="email" name="email" placeholder="Email" />
                <Input className="input" type="password" name="password" placeholder="Senha" />
                <Input className="input" type="password" name="passwordCheck" placeholder="Confirme a senha" />
                <Button>
                    <button className="button" type="submit">CADASTRAR</button>
                </Button>
            </Form>
        </React.Fragment>
    )
}