import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {

	getStudentData = () => {
		axios.get('http://localhost:3000/api1/student/1').then(
			response => {console.log('成功了', response.data)},
			error => {console.log('失败了', error.data)}
		)
	}

	render() {

		return (
			<div>
				<button onClick={this.getStudentData}>点我获取学生信息</button>
			</div>
		)
	}
}
