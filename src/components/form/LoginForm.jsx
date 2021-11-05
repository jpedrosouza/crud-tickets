import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from './Input'
import styled from 'styled-components'
import "../style/LoginForm.css"
 

export default function LoginForm() { 

    const formRef = useRef(null)

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatório'),
                password: Yup.string()
                .min(8, 'A senha deve conter no mínimo 8 caracteres')
                .required('A senha é obrigatória')
    
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
            font-family: 'Roboto Bold';
            src: url('/fonts/Roboto/Roboto-Bold.ttf');
        }

       .button {
        font-family: Roboto Bold;
        font-style: normal;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
       }
    `

    return(
        <React.Fragment>
            <Form className="form" ref={formRef} onSubmit={handleSubmit}>
                <Input className="input" type="email" name="email" placeholder="Email" />
                <Input className="input" type="password" name="password" placeholder="Senha" />
                <Button>
                    <button className="button" type="submit">ENTRAR</button>
                </Button>
            </Form>
        </React.Fragment>
    )
}