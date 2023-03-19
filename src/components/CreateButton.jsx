import styles from './CreateButton.module.css';
import { PlusCircle } from 'phosphor-react'

export function CreateButton({...props}){
  return(
    <button type="submit" className={styles.button} {...props}>
      Criar
      <PlusCircle size={16} />
    </button>
  )
}