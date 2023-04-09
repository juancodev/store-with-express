const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  const users = [{
      id: 1,
      name: 'Juan',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Cynthia',
      role: 'admin'
    },
    {
      id: 3,
      name: 'admin',
      role: 'user'
    }
  ]
  const {
    limit,
    offset
  } = request.query;
  if (limit && offset) {
    response.json({
      limit,
      offset
    });
  } else {
    response.send(users);
  }
});

module.exports = router;
