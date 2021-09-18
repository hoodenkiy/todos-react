import { connect } from 'react-redux'
import { updateToDo } from '../store/actions'
import { useState, useEffect, useRef } from 'react'

const Editable = ({ todo, updateToDo }) => {
	const textInput = useRef(null)
	const [isInputVisible, setIsInputVsible] = useState(false)

	useEffect(() => {
		if (isInputVisible) {
			textInput.current.focus()
		}
	}, [isInputVisible])

	const updateToDoInfo = ({ target }) => {
		setIsInputVsible(false)
		updateToDo({ ...todo, title: target.value })
	}

	return isInputVisible ? (
		<input
			className="form-control w-100 rounded-0 text-primary"
			placeholder="Enter title ..."
			onBlur={updateToDoInfo.bind(this)}
			type="text"
			defaultValue={todo.title}
			ref={textInput}
		/>
	) : (
		<span
			onClick={() => setIsInputVsible(true)}
			className={todo.completed ? 'text-muted' : 'link-style'}
		>
			{todo.title}
		</span>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		updateToDo: todo => dispatch(updateToDo(todo))
	}
}

export default connect(null, mapDispatchToProps)(Editable)
