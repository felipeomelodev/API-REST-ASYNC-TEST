import { Request, Response } from "express"
import { lerDados, adicionarDados } from "../utils/arquivos"
import Link from "../modelos/link"

export default class CadastroLink {
    async controlador(req: Request, res: Response) {
        const { url, identificador } = req.body

        if (!url || !identificador) {
            return res.status(400).json({
                mensagem: 'A url e o identifcador são obrigatórios!'
            })
        }

        const bancoDeDados = await lerDados()

        const existelink =  bancoDeDados.find(link => {
            return link.identificador === identificador
        })

        if (existelink) {
            return res.status(400).json({
                mensagem: 'O link já existe!'
            })
        }

        const novoLink = new Link(identificador, url) 

        await adicionarDados(novoLink)

        return res.status(201).json(novoLink)

    }
}