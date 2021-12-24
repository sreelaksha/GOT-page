import React from "react";
import CharacterService from "../../services/CharacterService";
import { Card, CardContainer } from "../../styles/CardComponent";
import { getIdFromUrl } from "../../utils";
import Page from "../common/Page";
import Pagination from "../common/Pagination";

export default class CharactersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }
  componentDidMount() {
    this.loadCharacters(1);
  }

  handleCardClick = (character) => {
    const characterId = getIdFromUrl(character.url);
    this.props.history.push(`/character/${characterId}`);
  };

  loadCharacters = ({ page }) => {
    CharacterService.getAllCharacters(page).then((result) => {
      this.setState({
        characters: result,
      });
      console.log(this.state.characters);
    });
  };

  render() {
    return (
      <Page>
        <h1>Characters</h1>
        <CardContainer>
          {this.state.characters.map((character, index) => (
            <Card
              key={index}
              onClick={this.handleCardClick.bind(this, character)}
            >
              {character.name !== "" ? (
                <h2> {character.name} </h2>
              ) : (
                <h2>Not known</h2>
              )}
              <p>{character.gender}</p>
            </Card>
          ))}
        </CardContainer>
        <Pagination handlePagination={this.loadCharacters} noOfPages={2138} />
      </Page>
    );
  }
}
