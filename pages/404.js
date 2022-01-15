import {FaExclamationTriangle} from 'react-icons/fa'
import Link from "next/link"
import Layout from "../components/Layout"
import styles from '../styles/404.module.css'
export default function NotFoundPage() {
    return (
        <Layout>
            <h1><FaExclamationTriangle/> soory</h1>
        </Layout>
    )
}
