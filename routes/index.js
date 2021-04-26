// const usuarioController = require('../controllers/usuario');
// const juegoController = require('../controllers/juego');

const controller = require('../controllers/index')

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Example project did not give you access to the api web services',
    }));
    app.post('/api/usuario/create/username/:username/status/:status', controller.usuarioController.create);
    app.get('/api/usuario/list', controller.usuarioController.list);
    app.get('/api/usuario/find/username/:username', controller.usuarioController.find);

    app.post('/api/juego/create', controller.juegoController.create);
    app.get('/api/juego/list', controller.juegoController.list);
    app.get('/api/juego/find', controller.juegoController.find);

    app.post('/api/participacion/create', controller.participacionController.create);
    app.get('/api/participacion/list', controller.participacionController.list);
    app.get('/api/participacion/find', controller.participacionController.find);
};