import CustomErrorAPI from '../errors/custom-error.mjs';

const errorHandlerMiddlware = (err, req, res, next) => {
  if (err instanceof CustomErrorAPI) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: 'Deu merda, tente dnv dps familia.' });  
};

export default errorHandlerMiddlware;