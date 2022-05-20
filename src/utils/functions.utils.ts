import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { toast } from 'react-toastify';

export const getBaseURL = () => {
  let baseURL = 'http://localhost:8001'
  // if (process.env.REACT_APP_NODE_ENV === "development") {
  //   baseURL = 'http://localhost:8001'
  // } else if (process.env.REACT_APP_NODE_ENV === "stage") {
  //   baseURL = ''
  // }
  return baseURL
}

export const useSetState = (initialState: any) => {
  const [state, setState] = useState(initialState)

  const newSetState = (newState: any) => {
    setState((prevState: any) => ({ ...prevState, ...newState }))
  }
  return [state, newSetState]
}

export const modelError = (error: any) => {
  console.log(JSON.stringify(error.response));
  if (error.response.data.message) {
    return error.response.data.message;
  } else if (error.message) {
    return error.message;
  } else if (error.response) {
    return error.response;
  } else {
    return error;
  }
};

export const nanoid = () => {
  const alphabet =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const nanoId = customAlphabet(alphabet, 10);
  return nanoId();
};

export const Options = (callBack) => {
  const options = {
    onUploadProgress: (progressEvent) => {
      const { total, loaded } = progressEvent;
      const completePercentage: any = (loaded / total) * 100;
      callBack(parseInt(completePercentage));
    },
  };
  return options;
};

export const removeEmptyValues = (object = {}) => {
  const data = {}
  Object.keys(object).forEach((item) => {
    object[item] && (data[item] = object[item])
  })
  return data
}

export const getNestedObjectValue = (nestedObj, path) => {
  const pathArr = path.split('.');
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj,
  );
};
export const toastifyError = (text?: any) => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const toastify = (text?: any) => {
  toast(text, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const ErrorMessage = (error) => {
  toast.error(error);
};

export const upperCase = (text: string): string => {
  text = text.toUpperCase();
  text = text.replace(/_/g, " ");
  return text;
}

const Functions = {
  useSetState,
  getBaseURL,
  modelError,
  nanoid,
  removeEmptyValues,
  getNestedObjectValue
}

export default Functions