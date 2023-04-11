import { Typography } from '@mui/material'

import styles from './header.module.css'

export const HeaderComponent = () => {
  return (
    <header className={styles.navbar}>
      <nav className="navbar__content">
        <Typography className={styles.navbar__title} >Challenge</Typography>
      </nav>
    </header>
  )
}
