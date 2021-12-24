import React from "react";
import HouseService from "../services/HouseService";
import { Card, CardContainer } from "../styles/CardComponent";
import { getIdFromUrl } from "../utils";
import Page from "./shared/Page";
import Pagination from "./shared/Pagination";

export default class HousesComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    };
  }
  componentDidMount() {
    this.loadHouses(1);
  }

  handleCardClick = (house) => {
    const houseId = getIdFromUrl(house.url);
    this.props.history.push(`/house/${houseId}`);
  };

  loadHouses = ({ page }) => {
    HouseService.getAllHouses(page).then((result) => {
      this.setState({
        houses: result,
      });
    });
  };

  render() {
    return (
      <Page>
        <h1>HOUSES</h1>
        <CardContainer>
          {this.state.houses.map((house, index) => (
            <Card key={index} onClick={this.handleCardClick.bind(this, house)}>
              <h2> {house.name} </h2>
              <p>{house.region}</p>
            </Card>
          ))}
        </CardContainer>
        <Pagination handlePagination={this.loadHouses} noOfPages={444} />
      </Page>
    );
  }
}
