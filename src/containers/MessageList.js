import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import {connect} from "react-redux";

  const MessagesList = (props) => (
    <section id="messages-list">
      <ul>
      {props.messages.map(message => (
        <Message
        key={message.id}
        {...message}
        />
      ))}
      </ul>
    </section>
  );

  MessagesList.propTypes = ({
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  });

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
};



export default connect(mapStateToProps)(MessagesList)
