import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
