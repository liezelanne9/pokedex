const controller = {
  get: (req, res) => {
    res.status(200).send('Hello from GET');
  },
  post: (req, res) => {
    res.status(201).send('Hello from POST');
  },
  delete: (req, res) => {
    res.status(202).send('Hello from DELETE');
  }
}

module.exports = controller;