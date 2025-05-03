import React from 'react'
import styles from './Search.module.scss';

const Search = () => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
      <input type="text" className={styles.input} placeholder='Search for Characters'/>
      <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search
