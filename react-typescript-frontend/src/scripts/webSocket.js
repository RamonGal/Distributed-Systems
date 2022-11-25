const userIdElement = document.getElementById('user_id');
const textContent = userIdElement != null ? userIdElement.textContent : '';
const userRoom = JSON.parse( textContent != null ? textContent : '') ;
import {verifyToken} from './src/scripts/verifyToken';
//settup the websocket route
var socket_start;
if (location.protocol !== 'https:') {
    socket_start = 'ws://'
}
else{
    socket_start = 'wss://'
}

// socket connection
const userSocket = new WebSocket(
    socket_start
    + window.location.host
    + '/ws/consumer/'
    + userRoom
    + '/'
);



userSocket.onmessage = function(e) {
    const data = JSON.parse(e.data).message;
    // update session with data
    switch (data.type) {
        case 'click_tile':
            click_tile(data.tile);
            break;
        default:
            break
    }
};

userSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

function click_tile(tile) {
    // update session with data
    console.log('click_tile', tile);
}
