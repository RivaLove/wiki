import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { item, test } = this.props;
    return (
      <div
        onClick={this.handleClick}
      >
        {test} - {item}
      </div>)
  }

  handleClick() {
    const { delbtn, index } = this.props
    delbtn(index)
  }
}
// 建议写上去，保证传值正确
TodoItem.propTypes = {
  test: PropTypes.string.isRequired, // 必须传递
  item: PropTypes.string,
  delbtn: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem