import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdotes = (props) => {
    const filter = useSelector(({ filter }) => {
        return filter.toUpperCase()
    })

    const dispatch = useDispatch()

    const sortedAnecdotes = props.anecdotes.sort((a,b) => {
        return a.votes - b.votes
    })

    const filteredAnecdotes = sortedAnecdotes.filter(anecdote => anecdote.content.toUpperCase().includes(filter))

    return (
        <div>
            <h2>Anecdotes</h2>
            {filteredAnecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const ConnectedAnecdotes = connect(mapStateToProps)(Anecdotes)

export default ConnectedAnecdotes