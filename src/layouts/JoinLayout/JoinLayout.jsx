"use client"
import React from 'react'
import styles from './joinLayout.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Icon, Image } from 'semantic-ui-react'
import { useAuth } from '@/hooks'
// import Image from 'next/image'

const JoinLayout = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();
    if (user) {
        router.push('/')
        return <h3>Loading...</h3>
    }

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <Link href="/">
                    {/* <Image src="/images/logo.png" alt="gaming" width={500} height={50}/> */}
                    <Image src="/images/logo.png" alt="gaming" />
                </Link>
                <Link href="/">
                    <Icon name="close" />
                </Link>
            </div>
            <div className={styles.blockLeft}>
                {children}
            </div>
            <div className={styles.blockRigth}></div>
        </div>
    )
}

export default JoinLayout
