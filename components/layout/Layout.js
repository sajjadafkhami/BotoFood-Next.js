import styles from "./Layout.module.css"
import LinK from "next/linK"

import React from 'react'

function Layout({children}) {
  return (
    <>
    <div className={styles.header}>
        <div className={styles.left}>
            <LinK href="/">BotoFood</LinK>
        </div>
        <div className={styles.right}>
            <LinK href="/menu">Menu</LinK>
            <LinK href="/categories">Categories</LinK>
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