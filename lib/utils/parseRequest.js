module.exports = rawRequest => {
  const requestMethod = rawRequest.split(' ')[0];
  const requestPath = rawRequest.split(' ')[1];
  const requestBody = rawRequest.split('\n')[4];

  if(requestMethod === 'GET'){
    return { method :`${requestMethod}`,
      path : `${requestPath}` };

  } else if(requestMethod === 'POST'){
    return { 
      method:`${requestMethod}`,
      path: `${requestPath}`,
      body:`${requestBody}`
    };
  }

};
