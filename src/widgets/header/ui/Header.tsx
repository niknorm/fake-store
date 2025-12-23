import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <h1>React shop</h1>
            </Link>
            <nav className={styles.navigation}>
                <NavLink to={'/'}>
                    Home
                </NavLink>
                <NavLink to={'/products'}>
                    Products
                </NavLink>
                <NavLink to={'/about'}>
                    About
                </NavLink>
            </nav>
            <div className={styles.auth}>
                <button>white</button>
                <button>Вход</button>
                <button>Регистрация</button>
            </div>
        </header>
    )
}