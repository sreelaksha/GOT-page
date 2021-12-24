import ApiService from './ApiService'

const CharacterService = {
    getAllCharacters(page) {
        return ApiService.get('characters/?pageSize=12&page='+page).then((response) => {
            return response.data
        })
    },

    getCharacter(id) {
        return ApiService.get(`characters/${id}`).then((response) => {
            return response.data
        })
    },
}
export default CharacterService

