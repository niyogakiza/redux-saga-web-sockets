import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../actions/addMessage'

const AddMessage = (props) => {
  let input;
  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.addMessage(input.value, 'Me');
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (message, author) =>  dispatch(addMessage(message, author))
  }
};

AddMessage.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddMessage)
