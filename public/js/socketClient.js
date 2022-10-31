
const socket = io();

socket.on('connect', () => {
    
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});
socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
});

socket.on('send-message', (payload) => {
    console.log(payload);
})

// HTML Reference
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');


const textMessage = document.querySelector('#textMessage');
const btnSend     = document.querySelector('#btnSend')
 
btnSend.addEventListener('click', () => {

const message = textMessage.value;
const payload = {
    message,
    id:'123cba',
    fecha: new Date().getTime()
}

   socket.emit('send-message', payload, (id) => {
    console.log('desde el server', id);
   });
});




