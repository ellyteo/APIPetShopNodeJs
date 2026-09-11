import cliente from '../model/cliente.js'

class RepositoryCliente {

    async Create(nome, telefone) {
        const clienteCriar = await cliente.create({ nome, telefone })

        return clienteCriar
    }

    async Find() {
        const clientes = await cliente.findAll()

        return clientes
    }

    async FindbyId(id) {
        const clienteDetalhe = await cliente.findByPk(id)

        return clienteDetalhe
    }

    async Update(id) {
        const clienteAlterar = await cliente.findByPk(id)

        if (!clienteAlterar) {
            throw new Error("Cliente não encontrado")
        }

        clienteAlterar.nome = nome
        clienteAlterar.telefone = telefone

        await clienteAlterar.save()
    }

    async Delete(id) {
        const clienteDeletar = await cliente.findByPk(id)

        if (!clienteDeletar) {
            throw new Error("Cliente não encontrado")
        }

        await clienteDeletar.destroy()

        return clienteDeletar
    }

}
export default new RepositoryCliente()