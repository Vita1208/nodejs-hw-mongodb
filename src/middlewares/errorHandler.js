import { HttpError } from 'http-errors';

// Middleware for error handling for 500 status
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(500).json({
    status:500,
    message: '500: Server error, please try again later.',
    data: err.message || 'Unknown error occurred.',
  });
};

export default errorHandler;

//const errorHandler = (error, req, res, next) => {
 // const { status = 500, message } = error;
 // res.status(status).json({
 //   status,
  //  message,
 //   data: null,
 // });
//};

//export default errorHandler;

// const errorHandler = (error, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//   });
// };
// export default errorHandler;