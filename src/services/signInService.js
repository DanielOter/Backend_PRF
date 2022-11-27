const { createUser,getUser } = require('../database/repository');
const assert = require('assert');
const createError = require("http-errors");

const signInService = async ({email,nickname}) =>{
   let result = {};
   const user = await getUser({email});
   if(user.length === 0){
         assert(nickname, createError.BadRequest('Missing nickname'));
         await createUser({email,nickname});
         result.status = 201;
         result.message = "Created";
         result.nickname = nickname;
         return result;
   }else{
      const {nickname :databaseNickname} = user[0]
      result.nickname = databaseNickname;
      result.status = 200;
      result.message = "Ok";
      return result;
   }
  
}

module.exports = { signInService }