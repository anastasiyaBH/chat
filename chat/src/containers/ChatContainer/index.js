import { connect } from 'react-redux';
import Chat from '../../components/Chat';

const ChatContainer = connect(state => ({
  messages: state.messageState
}), {})(Chat);

export default ChatContainer;