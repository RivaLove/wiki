import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    // 当 state or prop changes , render done again
    super(props);
    this.state = { //组件的状态
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelClick = this.handleDelClick.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input id='insertArea'
            className='input'
            type='text'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          delbtn={this.handleDelClick} />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({ inputValue: value }))
  }
  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDelClick(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1)
      return { list }
    })

  }
}

export default TodoList;