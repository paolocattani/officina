const cardsController = require('../controllers/cards')

export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/cards', cardsController.create);
};