export const errorHandler = (error, message) => {
  if (error.response) {
    throw new Error(error.response.data.message);
  }
  throw new Error(
    'Oops! Something went wrong. Please give your browser a refresh.'
  );
};
