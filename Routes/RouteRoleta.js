import express from "express"
const router = express.Router();
import {RoletaControllerPost} from "./../controller/RoletaController.js"

 router.post("/", RoletaControllerPost)
 
 export {router}
