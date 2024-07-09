const { response } = require('express');
const fetch = require('node-fetch');

async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  async function getdata(url){
    try {
        const users= await fetch(url);
        if (!users.ok) {
            throw new Error('Network response was not ok');
          }
          return await users.json();
    } catch (error) {
        console.log(error);
    }
  }


  async function putData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // console.log(response);
      return await response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  async function deleteData(url) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }


  


  module.exports = { postData,getdata,putData,deleteData};