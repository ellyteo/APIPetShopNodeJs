import RepositoryCliente from '../repository/cliente.js'

class ServiceCliente {

    async Create(nome, telefone) {
        if (!nome || !telefone) {
            throw new Error("Favor informar todas as informações")
        }

        const cliente = await RepositoryCliente.Create(nome, telefone)

        return cliente
    }

    async Find() {
        return RepositoryCliente.Find()
    }

    async FindbyId(id) {
        if (!id) {
            throw new Error("Favor informar o Id!")
        }

        await RepositoryCliente.FindbyId(id)

        if (!cliente) {
            throw new Error("Cliente não encontrado!")
        }

        return cliente
    }

    async Update(id, nome, telefone) {
        if (!id || !nome || !telefone) {
            throw new Error("Favor informar o id!")
        }

        const clienteAlterar = RepositoryCliente.Update(id, nome, telefone)

        return clienteAlterar
    }

    async Delete(id) {
        if (!id) {
            throw new Error("Favor informar o id!")
        }

        const clienteDeletar = RepositoryCliente.Delete(id)

        return clienteDeletar
    }

}
export default new ServiceCliente()