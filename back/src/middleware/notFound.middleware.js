export const notFoundMiddleware = (req, res, next) => {
  const endpoint = req.url;
  res.status(404).json({
    status: 404,
    message: `Endpoint '${endpoint}' not found`,
  });
  next();
};
