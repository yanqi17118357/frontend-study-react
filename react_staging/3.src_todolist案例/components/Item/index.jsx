import React, {Component} from 'react';
import './index.css'

export default class Item extends Component {

	state = {mouse:false}

	// 标识鼠标移入、移出
	handleMouse = (flag) => {
		return () => {
			this.setState({mouse:flag})
		}
	}

	// 勾选、取消勾选某一个todo的回调
	handleCheck = (id) => {
			return (event) => {
					this.props.updateTodo(id, event.target.checked)
			}
	}

	// 实现删除按钮的功能
	handleBtn = (id) => {
		return () => {
			if(window.confirm('你确定删除吗？')){
				this.props.deleteTodo(id)
			}
		}
	}

	render() {
		const {id, name, done} = this.props
		const {mouse} = this.state

		return (
			<div>
				<li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
					<label>
						<input type='checkbox' checked={done} onChange={this.handleCheck(id)} />
						<span>{name}</span>
					</label>
					<button onClick={this.handleBtn(id)} className='btn btn-danger' style={{display: mouse? 'block' : 'none'}}>删除</button>
				</li>
			</div>
		);
	}
}
