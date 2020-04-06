import React, { useCallback } from "react";
import isEmpty from "lodash/isEmpty";
import { message } from "antd";

export const useMessage = () => {
  return useCallback((messageType, responseError) => {
    if (!isEmpty(responseError)) {
      message[messageType](responseError);
    }
  });
};
