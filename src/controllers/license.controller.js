const service = require('../service/license.service')

const getLicensedata = (request, response) => {
  service.getLicensedata(request, response)
}

module.exports = {
  getLicensedata
}
