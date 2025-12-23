
import { Outlet } from "react-router-dom"
import { Header } from "../../widgets/header/ui/Header"
import styles from './Layout.module.css'

function Layout() {


  return (
    <>
    <Header />
    <main className={styles.container}>
      <Outlet />
    </main>
      
    </>
  )
}

export default Layout
