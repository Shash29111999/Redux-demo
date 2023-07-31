import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Tasks'
import TaskList from './components/TaskLists'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByFive , reset} from './redux/features/count/countSlice'
import { fetchUsers } from './redux/features/users/userSlice'

function App() {
  

  const count = useSelector( (state) => state.count.count)
  const {users , error , loading }= useSelector ( (state) => state.usersXD)
  const dispatch = useDispatch();

  // useEffect( () => {
  //   dispatch(fetchUsers());
  // },[])

  return (
     <>
      <Task />
      <TaskList />
      <h2>{count}</h2>
      <button onClick={ () => dispatch(increment())}>add one</button>
      <button onClick={ () => dispatch(decrement())}>minus one</button>
      <button onClick={ () => dispatch(incrementByFive(5))}>add by five</button>
      <button onClick={ () => dispatch(reset())}>reset</button>
      <button onClick={ () => dispatch(fetchUsers())}>fetch user</button> 
      { loading && <div>loading...</div>}
      {
        users.length > 0 ?
        (
          <ul>
          {
            users.map(user => (<li key={user.id}>{user.title}</li>))
          }
          </ul>
        ) : 
        ( 
          <div>
            {users.title}
          </div>  
        )
      } 
        
     </>
  )
}

export default App
