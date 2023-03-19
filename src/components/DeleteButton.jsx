import styles from './DeleteButton.module.css';
import { Trash } from 'phosphor-react'

export function DeleteButton({...props}){
  return(
    <button className={styles.button} type='button' {...props}>
      <Trash size={18} />
    </button>
  )
}