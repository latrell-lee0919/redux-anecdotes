import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE': {
      const id = action.data.id
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : action.data.changedAnecdote)
    }
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_DATA':
      return action.data
    default:
      return state
  }
}

export const initializeData = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_DATA',
      data: anecdotes,
    })
  }
}

export const vote = (id) => {
  return async dispatch => {
      const changedAnecdote = await anecdoteService.upvote(id)
      dispatch({
        type: 'VOTE',
        data: {
          id: id,
          changedAnecdote
        }
      })
  }
} 

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export default anecdoteReducer