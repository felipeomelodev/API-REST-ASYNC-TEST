import fs from 'fs/promises'
import Link from '../modelos/link'
import CadastroLink from '../controladores/Cadastro_Link_Controlador'

const caminhoBancoDeDados = 'src/bancoDeDados.json'

export async function lerDados(): Promise<Link[]> {
    const dados = await fs.readFile(caminhoBancoDeDados)
    const parse = JSON.parse(dados.toString())
    return parse
}

export async function adicionarDados(link: Link) {
    const dados = await lerDados()
    dados.push(link)
    await fs.writeFile(caminhoBancoDeDados, JSON.stringify(dados, null, ' \t'))
}

export async function contarVisitas(identificador: string) {
    const dados = await lerDados()

    const link = dados.find(link => {
        return link.identificador === identificador
    })

    const linkComVisita: Link = {
        identificador: link!.identificador,
        url: link!.url,
        visitas: link!.visitas + 1
    }

    const indice = dados.findIndex(link => {
        return link.identificador === identificador
    })

    dados.splice(indice, 1, linkComVisita)
    
    await fs.writeFile(caminhoBancoDeDados, JSON.stringify(dados, null, ' \t'))
}