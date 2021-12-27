import React from "react";
import CharacterService from "../../services/CharacterService";
import {
  Card,
  CardContainer,
  PaginationContainer,
  FilterCard,
} from "../../styles/StyleComponent";
import { getIdFromUrl } from "../../utils";
import Page from "../common/Page";
import Pagination from "../common/Pagination";
import { Box, Menu, Button, Text } from "grommet";
import { FormDown as FilterIcon, Close as CancelIcon } from "grommet-icons";

export default class CharactersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filter: "",
      filterSelected: "",
    };
  }
  componentDidMount() {
    this.loadCharacters(1);
  }

  handleCardClick = (character) => {
    const characterId = getIdFromUrl(character.url);
    this.props.history.push(`/gameofthrones-overview/character/${characterId}`);
  };

  handleFilter = (filterValue, filterSelected) => {
    this.setState({ filter: filterValue, filterSelected: filterSelected }, () =>
      this.loadCharacters(1)
    );
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
        <Box align="end" pad="large">
          <FilterCard>
            {this.state.filterSelected && (
              <>
                <Button
                  hoverIndicator="status-error"
                  onClick={() => {
                    this.handleFilter("", "");
                  }}
                  active
                >
                  <Box pad="small" direction="row" align="center" gap="small">
                    <Text>{this.state.filterSelected}</Text> <CancelIcon />
                  </Box>
                </Button>
              </>
            )}
            <Text margin="small" color="light-1">
              Filter:
            </Text>
            <Menu
              color="light-1"
              dropProps={{
                align: { top: "bottom", left: "left" },
                elevation: "xlarge",
              }}
              background="#476172"
              label="Gender"
              dropBackground="black"
              icon={<FilterIcon color="light-1" />}
              items={[
                {
                  label: "Male",
                  onClick: () => {
                    this.handleFilter("&gender=Male", "Male");
                  },
                },
                {
                  label: "Female",
                  onClick: () => {
                    this.handleFilter("&gender=Female", "Female");
                  },
                },
              ]}
            />
          </FilterCard>
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
