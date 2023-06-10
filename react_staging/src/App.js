import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'
export default class App extends Component {
	render() {
		return (
			<div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
                    <List />
                    <Footer />
                </div>
                    
            </div>
		)
	}
}
