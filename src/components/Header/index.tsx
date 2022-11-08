import imgLogo from '../../assets/logo.svg'
import styles from './Header.module.css'

export function Header():JSX.Element {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt="Avião com texto escrito TODO ao lado" />


    </header>
  )
}