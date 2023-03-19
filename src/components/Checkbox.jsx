import styles from './Checkbox.module.css';

export function Checkbox({inputIdLabelFor, ...props}){
  return(
    <div className={styles.checkboxWrapper}>
      <input 
        type="checkbox" 
        className={styles.input}  
        id={inputIdLabelFor}
        {...props}
      />
      <label htmlFor={inputIdLabelFor}></label>
    </div>
  )
}
