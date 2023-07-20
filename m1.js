var amqp = require('amqplib/callback_api');

function get(req) {
    try {
        amqp.connect('amqp://localhost', function(error0, connection) {
            if (error0) {
                throw error0;
            }
        
                connection.createChannel(function(error1, channel) {
                if (error1) {
                    throw error1;
                }
                var queue = req.route.path.substring(1);
                var msg = !!req.query.name ? req.query.name : 'undefined';
                channel.assertQueue(queue, {
                    durable: false
                });
        
                channel.sendToQueue(queue, Buffer.from(msg));
                console.log(" [x] Sent %s", msg);
            });
            setTimeout(() => {
                connection.close();
            }, 500);
        });
        return 'ok';
    }
    catch {
        return 'bad request';
    }
}

module.exports = get