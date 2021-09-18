import { connect } from 'react-redux'
import { getTodos } from '../store/actions'
import React, { useEffect } from 'react'
import ListItem from './ListItem'

const List = props => {
	useEffect(() => {
		props.getTodos()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getTodos])

	const todos = props.todos.map((todo, index) => (
		<ListItem key={index} todo={todo} />
	))

	return <main>{todos}</main>
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getTodos: todo => dispatch(getTodos(todo))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
