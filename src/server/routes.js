const { handlerPredictionRequest, handleAllGetDataRequest } = require("../server/handler");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: handlerPredictionRequest,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
      },
    },
  },
  {
    path: "/predict/histories",
    method: "GET",
    handler: handleAllGetDataRequest,
  },
];

module.exports = routes;
