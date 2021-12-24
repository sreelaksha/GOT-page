import React from "react";
import CharacterService from "../../services/CharacterService";
import { withRouter } from "react-router-dom";
import AttributeValueComponent from "../common/AttributeValueComponent";
import { WideCard } from "../../styles/CardComponent";
import Page from "../common/Page";

class CharacterDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    CharacterService.getCharacter(this.state.id).then((result) => {
      this.setState({
        characters: result,
      });
    });
  }

  render() {
    return (
      <Page>
        <h1> Characters</h1>
        {this.state.characters && (
          <section>
            <WideCard>
              <AttributeValueComponent
                label="Name"
                value={this.state.characters.name}
              />
              <AttributeValueComponent
                label="Gender"
                value={this.state.characters.gender}
              />
              <AttributeValueComponent
                label="Culture"
                value={this.state.characters.culture}
              />
              <AttributeValueComponent
                label="Born"
                value={this.state.characters.born}
              />
              <AttributeValueComponent
                label="Died"
                value={this.state.characters.died}
              />
              <AttributeValueComponent
                label="Titles"
                value={this.state.characters.titles}
              />
              <AttributeValueComponent
                label="Aliases"
                value={this.state.characters.aliases}
              />
              <AttributeValueComponent
                type="character"
                label="Father"
                value={this.state.characters.father}
              />
              <AttributeValueComponent
                type="character"
                label="Mother"
                value={this.state.characters.mother}
              />
              <AttributeValueComponent
                type="character"
                label="Spouse"
                value={this.state.characters.spouse}
              />
              <AttributeValueComponent
                type="house"
                label="Allegiances"
                value={this.state.characters.allegiances}
              />
              <AttributeValueComponent
                type="book"
                label="Books"
                value={this.state.characters.books}
              />
              <AttributeValueComponent
                type="book"
                label="Pov Books"
                value={this.state.characters.povBooks}
              />
              <AttributeValueComponent
                label="Tv Series"
                value={this.state.characters.tvSeries}
              />
              <AttributeValueComponent
                label="Played By"
                value={this.state.characters.playedBy}
              />
            </WideCard>
          </section>
        )}
      </Page>
    );
  }
}
export default withRouter(CharacterDetailsComponent);
