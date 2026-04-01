import User from "../model/user.js";

let authrization = async (req, res, next) => {
    try {
        let {userId}  = await req.auth();
        if(!userId){
            return res.status(401).json({message: "Unauthorized"})
        }
        next()
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}


export default authrization
    
