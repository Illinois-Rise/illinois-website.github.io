const path = require('path');


//Create React App Configuration Override = CRACO
//Allows us to config webpack without actually ejecting
//Fixes bug so that reloading on a route does not lead to 404 error
module.exports = () => {
    return{
        webpack: {
            devServer: {
                historyApiFallback: true,
            }
        }
    }
}