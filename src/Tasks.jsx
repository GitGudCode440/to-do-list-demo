import { useState } from 'react'
import React from 'react'


export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        name: "Doctor's Appointment",
        time: '27th June 2023',
        done: false
    },
    {
        id: 2,
        name: "Meeting with Sombra",
        time: '30th May 2022'
    },
    {
      id:3,
      name: "Hello there",
      time: '29th Feb 2029'
    }
  ])

  return (
    <div className="tasks">
      {
        tasks.map((_task) => (
          <div className='tasks 
            box-border
            bg-gray-100 border-gray-600 
            border-2 
            p-1 
            my-2 
            rounded-[4px]' key={_task.id}>
            <h2>{_task.name}</h2>
            <h3>{_task.time}</h3>
          </div>
        ))
      }
    </div>
  )
  
}
