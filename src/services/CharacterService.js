import ApiService from './ApiService'

const CharacterService = {
    getCharacter(id) {
        return ApiService.get(`characters/${id}`).then((response) => {
            return response.data
        })
    },
}
export default CharacterService

