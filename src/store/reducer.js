import { combineReducers } from 'redux'

const todos = []

const todosReducer = (state = todos, { type, payload }) => {
	switch(type) {
		case 'ADD_TODO':
			return [...state, payload]
		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== payload)
		case 'UPDATE_TODO':
			return state.map(todo => todo.id === payload.id ? payload : todo)
		case 'GET_TODOS':
			return [...payload]
		default:
			return state
	}
}

const rootReducer = combineReducers({
	todos: todosReducer
})

export default rootReducer
