import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './App.css';
export default class App extends Component {

	state = {todos:[
		{id:'001', name:'吃饭', done: true},
		{id:'002', name:'睡觉', done: true},
		{id:'003', name:'打代码', done: false}
	]}

	render() {
		const { todos } = this.state;
		return (
			<div className='todo-container'>
				<div className='todo-wrap'>
					<Header />
					{/*注意：传递参数的属性名称不能是关键字，比如delete*/}
					<List todos={todos}/>
					<Footer />
				</div>
			</div>
		);
	}
}
