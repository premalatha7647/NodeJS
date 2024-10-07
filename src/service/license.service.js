const externalApi = require('../util/external.api')

const getLicensedata = (request, response) => {
  const licenseURL = process.env.LICENSEURL + '/v1/getlicinfo'
  externalApi.postRequestAPI(licenseURL, request, response)
}
module.exports = {
  getLicensedata
}
