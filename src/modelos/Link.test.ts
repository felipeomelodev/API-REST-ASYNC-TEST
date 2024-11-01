import Link from "./link"

describe('Criação de links', () => {
    test('deve criar um link', () => {
        const link = new Link('cubostecnologia', 'https://cubos.tecnologia')

        expect(link).toHaveProperty('identificador', 'cubostecnologia')
        expect(link).toHaveProperty('url', 'https://cubos.tecnologia')
        expect(link).toHaveProperty('visitas', 0)
    })
})