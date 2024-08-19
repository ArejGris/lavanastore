const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const getUsers = async ( req, reply) => {
  
    try {
      const users=  await prisma.user.findMany({})
      
      reply.send({status:200,users:users})
    } catch (error) {
      console.log(error,"error")
        reply.status(500).send({message:"internal server error"})
   
    }
 
  };
  module.exports =  getUsers ;