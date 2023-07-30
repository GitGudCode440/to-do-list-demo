import './App.css'
import TaskForm from './TaskForm'
import Tasks from './Tasks'

export default function App() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className='
        border-2 
        border-gray-800 bg-gray-300 
        w-80 p-8 rounded-lg'>
 
        <TaskForm></TaskForm>
        <Tasks></Tasks>
      </div>
    </div>
  )
}


