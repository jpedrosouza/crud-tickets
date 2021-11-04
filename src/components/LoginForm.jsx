import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from './form/Input'
 

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

    return(
        <React.Fragment>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Senha" />

                <button type="submit">ENTRAR</button>
            </Form>
        </React.Fragment>
    )
}