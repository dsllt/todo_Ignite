import styles from './Header.module.css';
import todoLogo from '../assets/logo.svg'

export function Header(){

  return(
    <div className={styles.header}>
      <img className={styles.logoImg} src={todoLogo}/>
      <h1 className={styles.blueText}>to</h1><h1 className={styles.purpleText}>do</h1>
    </div>
  )
}