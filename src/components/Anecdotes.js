import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {
    const anecdotes = useSelector(({ anecdotes }) => {
        return anecdotes
    })
    const dispatch = useDispatch()

    const sortedAnecdotes = anecdotes.sort((a,b) => {
        return a.votes - b.votes
    })

    return (
        <div>
            <h2>Anecdotes</h2>
            {sortedAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => {
                        dispatch(vote(anecdote.id))
                        dispatch(setNotification(`You voted for '${anecdote.content}'`, 5))
                    }}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default Anecdotes