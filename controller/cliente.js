import ServiceCliente from '../service/cliente.js'

class ControllerCliente {

    async Create(req, res) {
        try {
            const { nome, telefone } = req.body

            await ServiceCliente.Create(nome, telefone)

            res.send({ message: "Criador com sucesso!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Find(_, res) {
        try {
            const clientes = ServiceCliente.Find()

            res.send({ message: clientes })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async FindById(req, res) {
        try {
            const id = req.params.id

            const cliente = await ServiceCliente.FindbyId(id)

            res.send({ message: cliente })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id
            const { nome, telefone } = req.query

            await ServiceCliente.FindbyId(id)

            res.send({ message: "Alterado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id

            await ServiceCliente.Delete(id)

            res.send({ message: "Deletado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

}
export default new ControllerCliente()