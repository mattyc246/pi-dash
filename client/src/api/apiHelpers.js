export const HTTP_STATUS_OK = 200;

export const failedResponse = (props) => {
  return {
    isSuccess: false,
    ...props
  };
};

export const successResponse = (props) => {
  return {
    isSuccess: true,
    ...props
  };
};
