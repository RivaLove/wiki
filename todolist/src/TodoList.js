import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store/index';
import {  getInitList,getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    store.subscribe(this.handleStoreChange)//订阅改变
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemClick={this.handleItemClick}
      />
    )
  }
  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemClick(index) {
    // console.log(index)
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;