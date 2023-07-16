import JoinLayout from '@/layouts/JoinLayout/JoinLayout'
import styles from './sing-in.module.scss'
import Link from 'next/link'
import LoginForm from '@/Components/Auth/LoginForm/LoginForm'

function SingInPage() {
    return (
        <>
            <JoinLayout>
                <div className={styles.singIn}>
                    <h3>Iniciar Sesión</h3>
                    <LoginForm />
                    <div className={styles.action}>
                        <Link href="/join/sing-up">¿No tienes cuenta? Registrate </Link>
                    </div>
                </div>
            </JoinLayout>
        </>
    )
}

export default SingInPage
