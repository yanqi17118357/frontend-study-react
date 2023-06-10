import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'

export default class App extends Component {
	state = {
		todos: [
			{id: '001', name: '吃饭', done: true},
			{id: '002', name: '睡觉', done: true},
			{id: '003', name: '打代码', done: false},
		],
	}

	addTodo = todoObj => {
		// 获取当前状态
		const {todos} = this.state
		// 创建新的todos
		const newTodos = [todoObj, ...todos]
		// 更新状态
		this.setState({todos: newTodos})
	}

	updateTodo = (id, done) => {
		// 获取当前状态
		const {todos} = this.state
		// 更改todos
		const newTodos = todos.map(todoObj => {
			if (todoObj.id === id) {
				return {...todoObj, done: done}
			}
			return todoObj
		})

		this.setState({todos: newTodos})
	}

	deleteTodo = id => {
		// 获取当前状态
		const {todos} = this.state
		// 更改后的todos
		const newTodos = todos.filter(todoObj => todoObj.id !== id)

		this.setState({todos: newTodos})
	}

	deleteDoneTodo = () => {
		// 获取当前状态
		const {todos} = this.state
		// 更改后的todos
		const newTodos = todos.filter(todoObj => todoObj.done === false)
		
		this.setState({todos: newTodos})
	}

	checkedAllTodos = (done) => {
		const {todos} = this.state
		const newTodos = todos.map(todoObj => {return {...todoObj,done}})

		this.setState({todos: newTodos})
	}

	render() {
		const {todos} = this.state
		return (
			<div className='todo-container'>
				<div className='todo-wrap'>
					<Header addTodo={this.addTodo} />
					{/*注意：传递参数的属性名称不能是关键字，比如delete*/}
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} deleteDoneTodo={this.deleteDoneTodo} checkedAllTodos={this.checkedAllTodos} />
				</div>
			</div>
		)
	}
}
