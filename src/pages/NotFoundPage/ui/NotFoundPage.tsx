import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404 </h1>
        <h1 className={styles.titleNotFound}>страница не найдена :(</h1>
        <p className={styles.paragraph}>Попробуйте перейти на другую страницу</p>
      </div>
    </div>
  )
}

export default NotFoundPage