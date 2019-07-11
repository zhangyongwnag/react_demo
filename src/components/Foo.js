import React,{Component} from 'react'

export default class Bar extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <p>我是Foo内容</p>
        {this.props.location.query.a}
      </div>
    )
  }
}