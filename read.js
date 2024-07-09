const {getdata} = require('./api_communicator');

async function readUser(){
    const apiUrl=`https://crudcrud.com/api/ba79ebd757ca4120b4c27f44a24411b8/user`;
    try {
        const result=await getdata(apiUrl);
        return result;
        // console.log(result);
    } catch (error) {
        console.log(error);
    }   
}

module.exports = {readUser};