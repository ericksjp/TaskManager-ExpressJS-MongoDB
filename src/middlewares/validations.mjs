function validateBodyProperties (allowedProperties) {
  return (request, response, next) => {
    const bodyProperties = Object.keys(request.body);

    const invalidProperties = bodyProperties.filter((property) => !allowedProperties.includes(property));
    if (invalidProperties.length > 0) {
      return response.status(400).send({ msg: "Bad Request. Invalid properties.", invalidProperties: invalidProperties });
    }

    const missingProperties = allowedProperties.filter((property) => !bodyProperties.includes(property));
    if (missingProperties.length > 0) {
      return response.status(400).send({ msg: "Bad Request. Missing properties.", missingProperties: missingProperties });
    }
    
    next();
  };
}

export { validateBodyProperties };