import React, {Component} from 'react';
import './index.css'
export default class Footer extends Component {
	render() {
		return (
			<div className='todo-footer'>
				<label>
					{/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
					<input type='checkbox' />
				</label>
				<span>
					<span>已完成</span> / 全部
				</span>
				<button className='btn btn-danger'>清除已完成任务</button>
			</div>
		);
	}
}
