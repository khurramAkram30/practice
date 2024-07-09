const express = require('express');

const {create} = require('./create');
const {readUser} = require('./read');
const {update} = require('./update');
const {deletee} = require('./delete');

 

const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/create',(req,res)=>{
    const { name, age } = req.body;
    create(name,age); 
    res.send('User created successfully');
})

app.put('/update',(req,res)=>{
    // console.log(req);
    const { name, age , _id } = req.body;
    update(_id,name,age); 
    res.send('User updated successfully');
})

app.delete('/deleteUser/:id',(req,res)=>{
    // console.log(req.params);
    const id = req.params.id; // Get the id from the URL params
    // Call your delete function with the id
    deletee(id);
    res.send('User deleted successfully');
})

app.get('/getUsers', async (req, res) => {
    const users = await readUser(); 
    res.send(users); // Send fetched users as the response
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});