import app from './app';

const port = process.env.PORT || '3000';
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, onListening);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log('Listening on port: ' + port);
}
