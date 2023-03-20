import { Header } from './components/Header'
import { Input } from './components/Input'
import './global.css'
import styles from './App.module.css'
import { CreateButton } from './components/CreateButton'
import { Task } from './components/Task'
import clipboard from './assets/clipboard.svg'
import { useState } from 'react'

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [activeCheckboxCount, setActiveCheckboxCount] = useState(0)

  function handleNewTask() {
    setNewTask(event.target.value)
  }

  function handleAddNewTask() {
    const newTaskObject = {
      content: newTask,
      id: randomKey(),
      isChecked: false
    }
    setTasks([newTaskObject, ...tasks])
    setNewTask('')
  }

  function deleteTask(taskToDelete) {
    const tasksExcludingDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })
    setTasks(tasksExcludingDeletedOne)
  }

  function checkTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].isChecked = !tasks[taskIndex].isChecked;
    setTasks(tasks);
  }


  function getActiveCheckboxCount(){
    return tasks.filter((task) => task.isChecked === true).length
  }

  return (
    <div>
      <Header />
      <div className={styles.input}>
        <Input value={newTask} onChange={handleNewTask} />
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
            <span>
              {getActiveCheckboxCount()} de {tasks.length}
            </span>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div className={styles.tasks}>
            {tasks.map((task, index) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  onDeleteTask={deleteTask}
                  setActiveCheckboxCount={setActiveCheckboxCount}
                  taskIndex={index}
                  onCheck={checkTask}
                />
              )
            })}
          </div>
        ) : (
          <div className={styles.emptyTasks}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

function randomKey() {
  let randomKey = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < 30; i++) {
    randomKey += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }
  return randomKey
}
