import ApiService from './ApiService'

const HouseService = {
    getAllHouses() {
        return ApiService.get('houses/').then((response) => {
            return response.data
        })
    },

    getHouse(id) {
        return ApiService.get(`houses/${id}`).then((response) => {
                return response.data
        })
    }
}

export default HouseService