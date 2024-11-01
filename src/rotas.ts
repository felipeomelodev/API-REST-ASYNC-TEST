import { Router }  from 'express'
import CadastroLink from './controladores/Cadastro_Link_Controlador'

const rotas = Router()

rotas.post('/', new CadastroLink().controlador)
rotas.get('/:identificador')

export default rotas