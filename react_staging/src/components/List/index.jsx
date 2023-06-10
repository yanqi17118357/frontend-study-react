import React, {Component} from 'react';
import Item from '../Item/index'
import './index.css'
export default class List extends Component {
	render() {
		return (
			<div>
				<ul className='todo-main'>
					<Item />
					<Item />
					<Item />
					<Item />
				</ul>
			</div>
		);
	}
}
