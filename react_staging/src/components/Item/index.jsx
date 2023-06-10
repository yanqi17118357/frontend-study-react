import React, {Component} from 'react';
import './index.css'
export default class Item extends Component {
	render() {
		return (
			<div>
				<li >
					<label>
						<input type='checkbox' />
						<span>xxx</span>
					</label>
					<button>删除</button>
				</li>
			</div>
		);
	}
}
