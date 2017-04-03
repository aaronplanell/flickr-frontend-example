// __mocks__/axios.js

const axios = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => resolve({})
      );
    });
  },
  post: (url) => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => resolve({})
      );
    });
  }
}

export default axios;
