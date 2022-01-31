import { Field, Form, Formik } from "formik"


export const Formulario = () => {


    const nomeLocalStorage = "comentario";
    const arrayLocalStorage = (() => {
        localStorage.getItem(nomeLocalStorage);
        arrayLocalStorage ? JSON.parse(arrayLocalStorage) : []  
})

const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        localStorage.setItem(nomeLocalStorage, JSON.stringify(values, null, 2))
        setSubmitting(false)
    }, 1000);
}

return (
    <>
        <Formik initialValues={{ text: '', email: '', comentario: '' }} onSubmit={handleSubmit}>

            {({ isSubmitting, resetForm }) => (
                < Form >
                    <h3>Comentários</h3>
                    <div>
                        <Field name='text' type='text' id='name' required placeholder='Nome Completo' />
                        <Field name='email' type='email' id='email' required placeholder='E-mail' />
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
