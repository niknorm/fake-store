import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import ButtonSignIn from '../../../features/Buttons/ui/ButtonSignIn'
import ButtonRegister from '../../../features/Buttons/ui/ButtonRegister'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <h1>React shop</h1>
            </Link>
            <nav className={styles.navigation}>
                <NavLink to={'/'}>
                    <p>Home</p>
                </NavLink>
                <NavLink to={'/products'}>
                    <p>Products</p>
                </NavLink>
                <NavLink to={'/about'}>
                    <p>About</p>
                </NavLink>
            </nav>
            <div className={styles.auth}>
                <button>white</button>
                <ButtonSignIn />
                <ButtonRegister />
            </div>
        </header>
    )
}