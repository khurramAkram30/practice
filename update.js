const {putData} = require('./api_communicator');
// import postData  from './api_communicator.js';
async function update(id,name,age){
    const apiUrl=`https://crudcrud.com/api/ba79ebd757ca4120b4c27f44a24411b8/user/${id}`;
    try{
        const data={
            "name":name,
            "age":age
        };
        const result = await putData(apiUrl,data);
        // console.log("Data-updated",result);
    }
    catch(err){
        console.log(err);
    }
}
module.exports = { update };
