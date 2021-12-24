import React from "react";
import CharacterService from "../services/CharacterService";
import { Card, CardContainer } from "../styles/CardComponent";
import { getIdFromUrl } from "../utils";
import Page from "./shared/Page";
import Pagination from "./shared/Pagination";

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
              <h2> {character.name} </h2>
            </Card>
          ))}
        </CardContainer>
        <Pagination handlePagination={this.loadCharacters} noOfPages={2138} />
      </Page>
    );
  }
}
