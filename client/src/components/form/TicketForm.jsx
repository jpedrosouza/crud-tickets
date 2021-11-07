import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import "../style/style.css"
import * as yup from 'yup'
import Axios from 'axios'

export default function TicketForm() {

    const handleClick = (values) => {
        Axios.post('http://localhost:3001/ticket', {
            evento: values.evento,
            artista: values.artista,
            local: values.local,
            descricao: values.descricao,
            data: values.data,
            preco: values.preco,
            url: values.url,
        }).then((response) => {
            alert(response.data.msg)
        })
    }

    const validation = yup.object().shape({
        evento: yup.string().min(2, 'O envento deve conter no mínimo dois caracteres').required('O evento é obrigatório'),
        artista: yup.string().min(2, 'O nome deve deve conter no mínimo dois caracteres').required('O nome é obrigatório'),
        local: yup.string().min(2, 'O local deve conter no mínimo dois caracteres').required('O local é orbigatório'),
        descricao: yup.string().min(2, 'A descrição deve conter no mínimo dois caracteres').required('A descrição é orbigatório'),
        data: yup.string().required('A data é orbigatório'),
        preco: yup.string().required('O preço é orbigatório'),
        url: yup.string().url('Insira uma URL válida'),
    })

    const TicketFormGroup = styled.div`
    @font-face {
        font-family: 'Roboto Light';
        src: url('/fonts/Roboto/Roboto-Light.ttf');
    }

    font-family: Roboto Light;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    `
    const Input = styled.div`
        display: grid;
        justify-content: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        width: 88.15%;
        height: 96px;

        .form-erro {
            display: flex;
            justify-content: end;
            font-size: 12px;
            color: red;
        }


        ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: black;
            opacity: 0.7;
            /* Firefox */
        }
        
         :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: black;
            opacity: 0.7;
        }
        
         ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: black;
            opacity: 0.7;
        }
    `

    const LeftButton = styled.div`
        display: flex;
        justify-content: space-between;

        width: 179px;

        .add {
            width: 80px;
            height: 20px;
            background: #27AE60;
            border-radius: 5px;
            border: none;
            transition: 0.5s;
        }

        .add:hover {
            background: #2AE278;
        }

        .up {
            width: 80px;
            height: 20px;
            background: #F2994A;
            border-radius: 5px;
            transition: 0.5s;
        }

        .up:hover {
            background: #FABF8B;
        }
    `

    const RightButton = styled.div`
        display: flex;
        justify-content: end;
        width: 150px;

        .del {
            width: 80px;
            height: 20px;
            background: #EB5757;
            border-radius: 5px;
            transition: 0.5s;
        }

        .del:hover {
            background: #F07B7B;
        }
    `

    return(
        <React.Fragment>
            <Formik initialValues={{}} onSubmit={handleClick} validationSchema={validation}>
                <Form className="ticket-form">
                    <Input>
                        <TicketFormGroup>
                            Evento: <Field className="form-fiel" type="text" name="evento" />
                            <ErrorMessage className="form-erro" component="span" name="evento" />
                        </TicketFormGroup>
                        <TicketFormGroup>
                            Artista: <Field className="form-fiel" type="text" name="artista" />
                            <ErrorMessage className="form-erro" component="span" name="artista" />
                        </TicketFormGroup>
                        <TicketFormGroup>
                            Local: <Field className="form-fiel" type="text" name="local" />
                            <ErrorMessage className="form-erro" component="span" name="local" />
                        </TicketFormGroup>
                        <TicketFormGroup>
                            Descrição: <Field className="form-fiel" type="text" name="descricao" />
                            <ErrorMessage className="form-erro" component="span" name="descricao" />
                        </TicketFormGroup>
                        <TicketFormGroup>
                            Data: <Field className="form-fiel" type="date" name="data" />
                            <ErrorMessage className="form-erro" component="span" name="data" />
                        </TicketFormGroup>
                        <TicketFormGroup>
                            Preço: <Field className="form-fiel" type="text" name="preco" placeHolder="R$"/>
                            <ErrorMessage className="form-erro" component="span" name="preco" />
                        </TicketFormGroup>
                        <LeftButton>
                            <button className="add" type="submit">Adicionar</button>
                            <button className="up">Atualizar</button>
                        </LeftButton>
                        <TicketFormGroup>
                            URL(img): <Field className="form-fiel" type="url" name="url" />
                            <ErrorMessage className="form-erro" component="span" name="url" />
                        </TicketFormGroup>
                        <RightButton>
                            <button className="del">Excluir</button>
                        </RightButton>
                    </Input>
                </Form>
            </Formik>
        </React.Fragment>
    )
}