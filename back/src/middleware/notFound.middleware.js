export const notFoundMiddleware = (req, res, next) => {
  const endpoint = req.url;
  res.status(404).json({
    statusCode: 404,
    name: 'Not Found',
    message: `Endpoint '${endpoint}' not found`,
  });
  next();
};
