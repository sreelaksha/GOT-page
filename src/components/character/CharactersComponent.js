import React from "react";
import CharacterService from "../../services/CharacterService";
import {
  Card,
  CardContainer,
  PaginationContainer,
} from "../../styles/StyleComponent";
import { getIdFromUrl } from "../../utils";
import Page from "../common/Page";
import Pagination from "../common/Pagination";
import { Box, Menu } from "grommet";

export default class CharactersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filter: "",
    };
  }
  componentDidMount() {
    this.loadCharacters(1);
  }

  handleCardClick = (character) => {
    const characterId = getIdFromUrl(character.url);
    this.props.history.push(`/character/${characterId}`);
  };

  handleFilter = (filterValue) => {
    console.log(filterValue);
    this.setState({ filter: filterValue }, () => this.loadCharacters(1));
  };

  loadCharacters = ({ page }) => {
    CharacterService.getAllCharacters(page, this.state.filter).then(
      (result) => {
        this.setState({
          characters: result,
        });
      }
    );
  };

  render() {
    return (
      <Page>
        <h1>Characters</h1>
        <Box align="end" pad="small">
          <Menu
            color="light-1"
            dropProps={{
              align: { top: "bottom", left: "left" },
              elevation: "xlarge",
            }}
            label="Gender"
            items={[
              {
                label: "Male",
                onClick: () => {
                  this.handleFilter("&gender=Male");
                },
              },
              {
                label: "Female",
                onClick: () => {
                  this.handleFilter("&gender=Female");
                },
              },
            ]}
          />
        </Box>
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
        <PaginationContainer>
          <Pagination handlePagination={this.loadCharacters} noOfPages={2135} />
        </PaginationContainer>
      </Page>
    );
  }
}
