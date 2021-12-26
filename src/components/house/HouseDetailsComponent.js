import React from "react";
import HouseService from "../../services/HouseService";
import AttributeValueComponent from "../common/AttributeValueComponent";
import { WideCard } from "../../styles/StyleComponent";
import { withRouter } from "react-router-dom";
import Page from "../common/Page";

class HouseDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseDetails: null,
      //use the param from the url
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    HouseService.getHouse(this.state.id).then((result) => {
      this.setState({ houseDetails: result });
    });
  }

  render() {
    return (
      <Page>
        <h1> House Details </h1>
        {this.state.houseDetails && (
          <WideCard>
            <AttributeValueComponent
              label="Name"
              value={this.state.houseDetails.name}
            />
            <AttributeValueComponent
              label="Region"
              value={this.state.houseDetails.region}
            />
            <AttributeValueComponent
              label="Coat Of Arms"
              value={this.state.houseDetails.coatOfArms}
            />
            <AttributeValueComponent
              label="Words"
              value={this.state.houseDetails.words}
            />
            <AttributeValueComponent
              label="Titles"
              value={this.state.houseDetails.titles}
            />
            <AttributeValueComponent
              label="Seats"
              value={this.state.houseDetails.seats}
            />
            <AttributeValueComponent
              type="character"
              label="Current Lord"
              value={this.state.houseDetails.currentLord}
            />
            <AttributeValueComponent
              type="character"
              label="Heir"
              value={this.state.houseDetails.heir}
            />
            <AttributeValueComponent
              type="house"
              label="Overlord"
              value={this.state.houseDetails.overlord}
            />
            <AttributeValueComponent
              label="Founded"
              value={this.state.houseDetails.founded}
            />
            <AttributeValueComponent
              type="character"
              label="Founder"
              value={this.state.houseDetails.founder}
            />
            <AttributeValueComponent
              label="Died Out"
              value={this.state.houseDetails.diedOut}
            />
            <AttributeValueComponent
              label="Ancestral Weapons"
              value={this.state.houseDetails.ancestralWeapons}
            />
            <AttributeValueComponent
              type="house"
              label="Cadet Branches"
              value={this.state.houseDetails.cadetBranches}
            />
            <AttributeValueComponent
              type="character"
              label="Sworn Members"
              value={this.state.houseDetails.swornMembers}
            />
          </WideCard>
        )}
      </Page>
    );
  }
}

export default withRouter(HouseDetailsComponent);
