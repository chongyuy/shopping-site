import _axiox from 'axios'

const axios = baseURL => {
    const instance = _axiox.create({
        baseURL: baseURL || "http://localhost:3001",
        timeout: 1000

    });
    return instance;
};

export {axios};
export default axios()