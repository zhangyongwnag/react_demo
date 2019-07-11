import React,{Component} from 'react'

export default class App extends Component {
  constructor(){
    super();
  }
  toBar = () => {
    this.props.router.push('/Bar')
    console.log(this)
  }
  toFoo = () => {
    this.props.router.push({pathname:'/Foo',query:{a:'123'}})
  }
  render(){
    return (
      <div style={{padding:'200px'}}>
        <p onClick={this.toBar}>点击Bar组件</p>
        <p onClick={this.toFoo}>点击Foo组件</p>
        {this.props.children}
      </div>
    )
  }
}