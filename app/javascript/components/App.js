import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from './Blog'
import About from './About'

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Blog} />
					<Route exact path="/About" component={About} />
				</Switch>
			</div>
		)
	}
}

export default App
