const express = require('express');
const ApiError = require('./api_error');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/api/auth-error', (req, res, next) => {
  try {
    throw new ApiError(401, 'Not authorized');
  } catch (error) {
    next(error);
  }
});

app.get('/api/bad-request', (req, res, next) => {
  try {
    throw new ApiError(400, 'Bad request');
  } catch (error) {
    next(error);
  }
});

app.get('/api/not-found', (req, res, next) => {
  try {
    throw new ApiError(404, 'Not found');
  } catch (error) {
    next(error);
  }
});

app.get('/api/server-error', (req, res, next) => {
  try {
    throw new ApiError(500, 'Internal server error');
  } catch (error) {
    next(error);
  }
});

app.get('/api/uncaught-error', (req, res, next) => {
  try {
    iDoNotExist; // eslint-disable-line
  } catch (error) {
    next(error);
  }
});

app.get('/api/unprocessable-entity', (req, res, next) => {
  try {
    throw new ApiError(422, 'Unprocessable entity');
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log('Server listening on PORT:', PORT); // eslint-disable-line
});

app.use(function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).send({
      message: err.message,
      status: err.status
    });
  } else {
    res.status(500).send({
      message: err.message,
      status: 500
    });
  }
});
