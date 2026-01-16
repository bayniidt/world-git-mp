
import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.scss'

class App extends Component {
  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'prod-3g3554g64c244795', // User provided environment ID or I should ask? 
        // Actually, if simply init() is called without env, it uses default.
        // But best practice is to provide text. 
        // Since I don't know the exact env ID, I'll use `traceUser: true`.
        // 'quickstart-wx-cloud' in project.config.json might suggest a template, but not the ID.
        // I will use default init for now.
        traceUser: true,
      })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
