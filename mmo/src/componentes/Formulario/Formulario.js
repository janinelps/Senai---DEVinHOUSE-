import { Field, Form, Formik } from "formik"


export const Formulario = () => {

    const nomeLocalStorage = "comentario";

    const listaStorageTemp = localStorage.getItem(nomeLocalStorage)
    let listaStorage = listaStorageTemp ? JSON.parse(listaStorageTemp) : []

    const handleSubmit = (values, { setSubmitting }) => {
        listaStorage.push(values)
        localStorage.setItem(nomeLocalStorage, JSON.stringify(listaStorage))
        setSubmitting(false)
    }

    return (
        <>
            <Formik initialValues={{ nome: '', email: '', comentario: '' }} onSubmit={handleSubmit}>

                {({ isSubmitting, resetForm }) => (
                    < Form >
                        <h3>Comentários</h3>
                        <div>
                            <Field name='nome' type='text' required placeholder='Nome Completo' />
                            <Field name='email' type='email' required placeholder='E-mail' />
                        </div>
                        <div>
                            <Field component="textarea" rows="10" required name='comentario' placeholder='Deixe seu comentario' />
                        </div>

                        <button type="submit" disabled={isSubmitting}>ENVIAR</button>
                        <button type="button" disabled={isSubmitting} onClick={resetForm} >LIMPAR</button>

                    </Form>
                )}
            </Formik>
        </>
    )
}
