const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl()

const socketController =  (socket) => {

        

     socket.on('send-message', (payload, callback) => {

            const id = '123456789';
            if (!callback) return;

            if(payload.id){
                callback({
                    resp: 'el mesaje contiene la llave' + id
                })
                socket.broadcast.emit('send-message',payload)
            } else {
                callback({
                    resp:'ATENCION!! El mensaje no contiene la llave id'
                })
            }

        //  
     })
}


module.exports = {
    socketController
}