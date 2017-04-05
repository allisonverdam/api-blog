const app = require('./app');

app.listen(app.get('port'), 'localhost', console.log('Servidor ouvindo na porta: ', app.get('port')));