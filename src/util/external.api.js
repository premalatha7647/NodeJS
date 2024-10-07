const license = require('./license.json')

const postRequestAPI = async (url, request, response) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.body)
  }
  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      response.status(200).send(JSON.stringify(data))
    })
}

const getRequestAPI = (url, data) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(data)
  }
  console.log(request.body)
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      response.status(200).send(JSON.stringify(license))
    })
}

module.exports = {
  postRequestAPI,
  getRequestAPI
}
