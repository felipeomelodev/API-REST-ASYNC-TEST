import { Request, Response } from "express";
import { contarVisitas, lerDados } from "../utils/arquivos";

export default class ObterLink {
    async controlador(req: Request, res: Response) {
        const { identificador } = req.params

        const bancoDeDados = await lerDados()

        const existelink =  bancoDeDados.find(link => {
            return link.identificador === identificador
        })

        if (!existelink) {
            return res.status(404).json({
                mensagem: 'O link não existe!'
            })
        } 
        
        await contarVisitas(existelink.identificador)

        return res.status(200).json({
            url: existelink.url
        })

    }
}