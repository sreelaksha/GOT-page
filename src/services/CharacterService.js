import ApiService from "./ApiService";

const CharacterService = {
  getAllCharacters(page, filter) {
    let filterValue = filter != "" ? filter : "";
    return ApiService.get(
      "characters/?pageSize=12&page=" + page + filterValue
    ).then((response) => {
      return response.data;
    });
  },

  getCharacter(id) {
    return ApiService.get(`characters/${id}`).then((response) => {
      return response.data;
    });
  },
};
export default CharacterService;
