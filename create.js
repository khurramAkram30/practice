const {postData} = require('./api_communicator');

async function create(name,age){
    const apiUrl=`https://crudcrud.com/api/ba79ebd757ca4120b4c27f44a24411b8/user`;

    try{
        const data={
            "name":name,
            "age":age
        };
        const result = await postData(apiUrl,data);
        console.log("Data-posted",result);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { create };
