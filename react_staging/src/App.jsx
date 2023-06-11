import React, {Component} from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {

	state = {
		Git:[],
		isFrist:true,
		isLoad:false,
		isError:''
	}

	updateAppState = (stateObj) => {
		this.setState(stateObj)
	}

	render() {
		return (
			<div className='container'>
				<Search updateAppState={this.updateAppState} />
				<List {...this.state}/>
			</div>
		)
	}
}
