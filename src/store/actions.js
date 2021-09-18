import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

/**
 * Handles errors for api calls
 * @param {Error} error
 */
 const handleErrors = (error) => {
	console.log('error', error)
}

const DB_URL = 'https://json-data-server.herokuapp.com'

export const deleteToDo = ({ id }) => {
	return async dispatch => {
		axios
			.delete(`${DB_URL}/todos/${id}/`)
			.then(() => {
				dispatch({ type: 'DELETE_TODO', payload: id })
			})
			.catch(error => {
				handleErrors(error)
			})
	}
}

export const updateToDo = todo => {
	return async dispatch => {
		axios
			.put(`${DB_URL}/todos/${todo.id}/`, todo)
			.then(() => {
				dispatch({ type: 'UPDATE_TODO', payload: todo })
			})
			.catch(error => {
				handleErrors(error)
			})
	}
}

export const addToDo = todo => {
	return async dispatch => {
		const newToDo = {
			...todo,
			completed: false,
			id: uuidv4(),
			created: new Date()
		}
		axios
			.post(`${DB_URL}/todos`, newToDo)
			.then(() => {
				dispatch({ type: 'ADD_TODO', payload: newToDo })
			})
			.catch(error => {
				handleErrors(error)
			})
	}
}

export const getTodos = () => {
	return async dispatch => {
		const params = '?_sort=created&_order=desc'
		axios
			.get(`${DB_URL}/todos${params}`)
			.then(({ data }) => {
				dispatch({ type: 'GET_TODOS', payload: data })
			})
			.catch(error => {
				handleErrors(error)
			})
	}
}
