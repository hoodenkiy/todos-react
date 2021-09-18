import './assets/styles/style.scss'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import List from './components/List'
import React from 'react'

const App = () => {
	return (
		<div className="todos container my-5">
			<Header />
			<main>
				<Switch>
					<Route path="/" component={List} />
				</Switch>
			</main>
		</div>
	)
}

export default App
