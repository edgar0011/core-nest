import express from 'express';

const app = express();

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`server running at: ${server.address()} ${process.env.PORT}`);
});

process.on('uncaughtException', (err) => {
  // handle the error safely
  console.log(err);
});

process.on('unhandledRejection', (reason) => {
  throw reason; // you should handle all exceptions in tests explixitly
});
