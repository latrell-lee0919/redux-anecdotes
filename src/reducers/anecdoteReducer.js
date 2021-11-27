const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      console.log(anecdoteToChange.content)
      const newAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : newAnecdote)
    }
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_DATA':
      return action.data
    default:
      return state
  }
}

export const vote = (id) => {
  return {
      type: 'VOTE',
      data: { id }
  }
} 

export const initializeData = (data) => {
  return {
    type: 'INIT_DATA',
    data,
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export default anecdoteReducer