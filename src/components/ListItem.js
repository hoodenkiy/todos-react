import { connect } from 'react-redux'
import { getTodos, updateToDo, deleteToDo } from '../store/actions'
import Editable from './Editable'

const ListItem = ({ todo, updateToDo, deleteToDo }) => {
	const updateToDoInfo = ({ target }) => {
		updateToDo({ ...todo, completed: target.checked })
	}

	return (
		<div className="list-group-item list-group-item-action d-flex align-items-center w-100">
			<div className="pr-3">
				<input
					onChange={updateToDoInfo}
					checked={todo.completed}
					value={todo.id}
					className="rounded-0"
					type="checkbox"
				/>
			</div>
			<div className="flex-grow-1 text-left">
				<Editable todo={todo} />
			</div>
			<div>
				<button
					aria-label="Delete todo"
					className="btn btn-link"
					onClick={() => deleteToDo(todo)}
					type="button"
				>
					&times;
				</button>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		getTodos: todo => dispatch(getTodos(todo)),
		updateToDo: todo => dispatch(updateToDo(todo)),
		deleteToDo: todo => dispatch(deleteToDo(todo))
	}
}

export default connect(null, mapDispatchToProps)(ListItem)
