import React, {Component} from 'react'
import './index.css'
export default class Footer extends Component {
	handleBtn = () => {
		if (window.confirm('你确定进行删除吗？')) {
			this.props.deleteDoneTodo()
		}
	}

	handleChecked = event => {
		this.props.checkedAllTodos(event.target.checked)
	}

	render() {
		const {todos} = this.props
		// 总数
		let len = todos.length
		// 已完成的数目
		let num = todos.filter(todoObj => todoObj.done === true).length
		return (
			<div className='todo-footer'>
				<label>
					{/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
					<input
						type='checkbox'
						checked={num === len && len !== 0}
						onChange={this.handleChecked}
					/>
				</label>
				<span>
					<span>已完成{num}</span> / 全部{len}
				</span>
				<button className='btn btn-danger' onClick={this.handleBtn}>
					清除已完成任务
				</button>
			</div>
		)
	}
}
