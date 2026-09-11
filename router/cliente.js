import express from 'express'
import ControllerCliente from '../controller/cliente.js'

const router = express.Router()

router.post("/criar", ControllerCliente.Create)
router.get("/listar", ControllerCliente.Find)
router.get("/detalhe", ControllerCliente.FindById)
router.put("/alterar", ControllerCliente.Update)
router.delete("/deletar", ControllerCliente.Delete)

export default router