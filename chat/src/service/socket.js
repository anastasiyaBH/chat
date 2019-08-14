

const WSocket = (dispatch) => {

  const socket = new WebSocket('ws://st-chat.shas.tel');

  socket.onopen = () => {

    socket.send(JSON.stringify({
      from: '!!!9379992!!!',
      message: 'Hey'
    }))

  }

  socket.onmessage = event => {

    const data = JSON.parse(event.data);
    dispatch(receiveMessage(data.message, data.from, data.id, data.time));
  }

  return socket;
}

export default WSocket;