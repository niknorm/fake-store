import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { Button } from '../../../shared/ui/Button/Button'
import { useNotFoundPage } from '../../../shared/ui/Button/hooks/useNotFound'

export const Header = () => {
    const handleClick = useNotFoundPage()
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
                 <span className={styles.toggle}>☾</span>
                <Button text={'Вход'} className={'signIn'} onClick={handleClick} />
                <Button text={'Регистрация'} className={'signIn'} onClick={handleClick}/>
            </div>
        </header>
    )
}