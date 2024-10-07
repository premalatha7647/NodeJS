const userRoutes = require("./user.routes");
const licenseRoutes = require("./license.routes");


module.exports = function(app){
    app.use('/user',userRoutes);
    app.use('/license',licenseRoutes);
}