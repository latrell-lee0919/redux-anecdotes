import React, { useEffect } from 'react'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initializeData } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeData())
  }, [dispatch])

  return (
    <div>
      <Filter />
      <Notification />
      <Anecdotes/>
      <NewAnecdote />
    </div>
  )
}

export default App