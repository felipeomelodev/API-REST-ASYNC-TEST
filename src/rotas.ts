import { Router }  from 'express'
import CadastroLink from './controladores/Cadastro_Link_Controlador'
import ObterLink from './controladores/ObterLinkControlador'

const rotas = Router()

rotas.post('/', new CadastroLink().controlador)
rotas.get('/:identificador', new ObterLink().controlador)

export default rotas