import { Helmet } from 'react-helmet-async';
import styles from './data-loading-error-screen.module.css';

function NoResponseErrorScreen(): JSX.Element {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Ошибка загрузки данных</title>
      </Helmet>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <a href="/" className={styles.logoLink}>
            <img src="img/logo.svg" alt="Логотип" className={styles.logo} />
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.errorCode}>500</div>
          <h1 className={styles.title}>Ошибка загрузки данных</h1>
          <p className={styles.description}>
            Произошла ошибка при загрузке данных.
            <br />
            Пожалуйста, перезагрузите страницу.
          </p>
          <button onClick={handleReload} className={styles.reloadButton}>
            Перезагрузить страницу
          </button>
        </div>
      </main>
    </div>
  );
}

export default NoResponseErrorScreen;
