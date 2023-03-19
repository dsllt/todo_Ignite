import styles from './Input.module.css';

export function Input({...props}){
  return(
    <div className={styles.inputWrapper}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        {...props}
      />
    </div>
  )
}