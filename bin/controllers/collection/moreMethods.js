let nullName = '';

// add modules
const getElement = require('../../functions/functions_collections/functions/getElement');

const moreMethods = (method, name, data, newData, key, path) => {
if(method == 'get'){
        let answer = getElement(path, nullName, key, data);
        return answer;
    }else{
        return 'invalid method';
    }
}
//exports
module.exports = moreMethods;