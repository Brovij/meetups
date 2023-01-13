export const createResultContainer = (data, error, response) => ({
  success: !error,
  error,
  data,
  response,
});

export const createSuccessResult = (result, response) => createResultContainer(result, null, response);

export const createErrorResult = (error, response) => createResultContainer(null, error, response);
