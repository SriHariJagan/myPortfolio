import React from 'react'
import styles from './LoadingSnippet.module.css'

const LoadingSnippet = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.innerCircle}></div>
      </div>
    </div>
  )
}

export default LoadingSnippet
