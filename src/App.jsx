import { Header } from './components/Header';
import { Input } from './components/Input';
import './global.css';
import styles from './App.module.css';
import { CreateButton } from './components/CreateButton';
import { Task } from './components/Task';
import clipboard from './assets/clipboard.svg'
import { useEffect, useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [activeCheckboxCount, setActiveCheckboxCount] = useState(0);
  const [checkedState, setCheckedState] = useState([false]);

  function handleNewTask(){
    setNewTask(event.target.value);
  }
  
  function handleAddNewTask(){
    setTasks([newTask, ...tasks]);
    setCheckedState([false, ...checkedState]);
    setNewTask('');
    console.log('arra',checkedState)
  }

  function deleteTask(taskToDelete){
    const tasksExcludingDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    }) 
    setTasks(tasksExcludingDeletedOne);
  }


  return (
    <div >
      <Header />
      <div className={styles.input}>
        <Input value={newTask} onChange={handleNewTask}/>
        <CreateButton onClick={handleAddNewTask} />
      </div>
      <main>
        <div className={styles.tasksHeader}>
          <div className={styles.totalCreatedTasks}> 
            Tarefas criadas 
            <span>{tasks.length}</span>
          </div>
          <div className={styles.totalFinishedTasks}> 
            Concluídas
            <span>{activeCheckboxCount} de {tasks.length}</span>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div className={styles.tasks}>
          {tasks.map((task, index) => {
            return (
              <Task 
                id={task} 
                content={task} 
                onDeleteTask={deleteTask} 
                setActiveCheckboxCount={setActiveCheckboxCount}
                isChecked={checkedState[index]}
              />
              )})}
          </div>
        ):(
          <div className={styles.emptyTasks}>
            <img src={clipboard}/>
            <strong>
            Você ainda não tem tarefas cadastradas
            </strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}

      </main>
    </div>
  )
}

export default App
