// 这是里的{Component}不是的解构赋值而是通过分别暴露拿到Compoent
import React,{Component} from 'react'
// 引入Hello组件
import Hello from './components/Hello'
import Welcome from './components/Welcome'


// 创建外壳组件App
class App extends Component{

    render() {
        return(
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}

// 暴露App组件
export default App