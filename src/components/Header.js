import { connect } from 'react-redux'
import { addToDo } from '../store/actions'
import { useState } from 'react'

const Header = props => {
	const [todo, setToDo] = useState({
		title: null
	})

	const handleChange = (event) => {
		setToDo({ ...todo, title: event.target.value });
	}

	return (
		<header>
			<div className="d-flex align-items-center">
				<h1 className="text-muted mb-0 mr-3 font-weight-light">
					to<span className="text-primary">do</span>'s
				</h1>
			</div>

			<div className="nav-container">
				<div className="slanted-top bg-primary"></div>
				<nav className="navbar shadow navbar-expand-lg navbar-dark bg-primary py-3 pr-3 align-items-center">
					<span className="navbar-brand">+ Add todo: </span>
					<div className="flex-grow-1">
						<input
							className="form-control w-100 rounded-0 text-primary"
							placeholder="Enter title ..."
							onChange={handleChange.bind(this)}
							type="text"
						/>
					</div>
					<div className="btn-group-sm">
						<button
							onClick={() => props.addToDo(todo)}
							className="btn btn-light text-primary ml-2 rounded-0"
							type="submit"
						>
							Add
						</button>
					</div>
				</nav>
			</div>
		</header>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		addToDo: todo => dispatch(addToDo(todo))
	}
}

export default connect(null, mapDispatchToProps)(Header)
