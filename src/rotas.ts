import { Router }  from 'express'
import CadastroLink from './controladores/cadastro_Link_Controlador'

const rotas = Router()

rotas.post('/', new CadastroLink().controlador)
rotas.get('/:identificador')

export default rotas