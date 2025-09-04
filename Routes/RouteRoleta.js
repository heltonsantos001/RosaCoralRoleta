import express from "express"
const router = express.Router
import {RoletaControllerPost} from "./../controller/RoletaController"

router.post("/", RoletaControllerPost)

module.exports = router;