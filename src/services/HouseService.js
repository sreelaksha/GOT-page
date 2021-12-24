import ApiService from "./ApiService";

const HouseService = {
  getAllHouses(page) {
    return ApiService.get("houses/?pageSize=12&page=" + page).then(
      (response) => {
        return response.data;
      }
    );
  },

  getHouse(id) {
    return ApiService.get(`houses/${id}`).then((response) => {
      return response.data;
    });
  },
};

export default HouseService;
