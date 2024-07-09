const {deleteData} = require('./api_communicator');

async function deletee(id){
    const apiUrl=`https://crudcrud.com/api/ba79ebd757ca4120b4c27f44a24411b8/user/${id}`;
    try{
        const result = await deleteData(apiUrl);
        // console.log("Data-updated",result);
    }
    catch(err){
        console.log(err);
    }
}
module.exports = { deletee };
