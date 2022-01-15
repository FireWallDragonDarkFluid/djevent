import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>this is a footer</p>
            <p><Link href='/about'>about</Link></p>
        </footer>
    )
}
