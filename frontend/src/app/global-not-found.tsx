import './globals.scss'
import Link from 'next/link'
import styles from './global-not-found.module.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <main className={styles.notFound}>
                    <div className={styles.content}>
                        <svg
                            className={styles.icon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m21 21-4.3-4.3" />
                            <path d="M9 9.5 13 13.5" />
                            <path d="M13 9.5 9 13.5" />
                        </svg>

                        <p className={styles.code}>404</p>
                        <h1 className={styles.title}>Page introuvable</h1>
                        <p className={styles.text}>
                            La page que tu cherches n&apos;existe pas ou a été déplacée.
                        </p>

                        <Link className={styles.buttonBack} href="/">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M19 12H5" />
                                <path d="m12 19-7-7 7-7" />
                            </svg>
                            Retour à l&apos;accueil
                        </Link>
                    </div>
                </main>
            </body>
        </html>
    )
}