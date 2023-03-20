import { useState, useEffect } from 'react'
import { Checkbox } from './Checkbox'
import { DeleteButton } from './DeleteButton'
import styles from './Task.module.css'

export function Task(props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckInCheckbox() {
    props.onCheck(props.id);
    setIsChecked(prev => !prev)
  }
  
  function handleDeleteTask(){
    props.onDeleteTask(props.id);
  }

  useEffect(()=>{
    if (isChecked) {
      props.setActiveCheckboxCount((prevCount) => prevCount + 1);
    } else {
      props.setActiveCheckboxCount((prevCount) => {
        if (prevCount !==0){
          return prevCount - 1;
        }
        return prevCount
      });
    }

  }, [isChecked])
  
  return (
    <div className={styles.task}>
      <Checkbox
        checked={isChecked}
        onChange={handleCheckInCheckbox}
        inputIdLabelFor={props.content}
      />
      <p className={isChecked ? styles.checked : styles.notChecked}>{props.content}</p>
      <DeleteButton onClick={handleDeleteTask}/>
    </div>
  )
}
