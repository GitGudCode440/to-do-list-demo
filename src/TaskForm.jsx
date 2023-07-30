export default function TaskForm() {
    return (
      <>
        <div className="flex justify-between items-center">
          <h1 className='text-4xl'>To Do List</h1>
          <button className='bg-green-900 p-4 rounded-lg text-yellow-400'>Submit</button>
        </div>
        <form>
          <div className="form-container">
            <label htmlFor="task-name">
                Task Name:
            </label>
            <input type="text" 
              placeholder='Type Name' 
              name="task-name" 
              id="task-name" 
              className="p-1"
            />
          </div>
          
          <div className="form-container">
          
            <label htmlFor="description">
                Day to Be Completed:
            </label>
            <input 
              type="text"
              placeholder='Type Day'
              name="description" 
              id="description" 
              className="p-1"
            />
          </div>
        </form>
      </>
    )
}

