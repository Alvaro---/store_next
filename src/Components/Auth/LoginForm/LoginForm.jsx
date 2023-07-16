"use client"
import { Form } from 'semantic-ui-react'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import { Auth } from '@/api'
import { initialValues, validationSchema } from './LoginForm.Form'
import { useAuth } from '@/hooks'

const authCntrl = new Auth();

function LoginForm() {
    const router = useRouter()
    console.log(useAuth())

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await authCntrl.login(formValue);
                console.log("Login correcto");
                router.push("/")
            } catch (error) {
                console.log("Error:", error)
            }
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>

            <Form.Input name="identifier" type="text" placeholder="Correo electronico o nombre de usuario" value={formik.values.identifier} onChange={formik.handleChange} error={formik.errors.identifier} />
            <Form.Input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />

            <Form.Button type='submit' fluid loading={formik.isSubmitting}>Entrar</Form.Button>
        </Form>
    )
}

export default LoginForm
