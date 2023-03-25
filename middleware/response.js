const jwt=require("jsonwebtoken")

const ResponseMiddleWare = {
    verifyToken: async (req,res,next) => {
        console.log("token verifie")
        let authHeader = req.headers.authorization
        
        if(authHeader==undefined){
         return res.status(401).send({error:"no token provided"})
        }
        let token=authHeader.split(" ").pop()
        console.log(token)
        jwt.verify(token,process.env.SECRET_KEY,function(error,decoded){
          if(error){
           return res.status(401).send({Message: "Authorization has been denied for this request."})
          }else{
            //res.send(decoded)
            console.log("success verification")
            next()
          }
        })
    
    
      }

}

module.exports = ResponseMiddleWare;