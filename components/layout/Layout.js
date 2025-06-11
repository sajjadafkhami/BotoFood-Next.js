import styles from "./Layout.module.css"
import Link from 'next/link' 

import React from 'react'

function Layout({children}) {
  return (
    <>
    <div className={styles.header}>
        <div className={styles.left}>
            <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
        </div>
    </div>
    <div className={styles.container}>{children}</div>
    <div className={styles.footer}>
        Mythrize.lab | Next.js course | BotoFood.ir | Sadjad.Afkhami
    </div>
    </>
  )
}

export default Layout