import JoinLayout from '@/layouts/JoinLayout/JoinLayout'
import styles from './sing-up.module.scss'
import Link from 'next/link'
import RegisterForm from '@/Components/Auth/RegisterForm/RegisterForm'

function SingUpPage() {
    return (
        <>
            <JoinLayout>
                <div className={styles.singUp}>
                    <h3>Registrate</h3>
                    <RegisterForm/>
                    <div className={styles.actions}>
                        <Link href="/join/sing-in">Ingresar </Link>
                    </div>
                </div>
            </JoinLayout>
        </>
    )
}

export default SingUpPage
