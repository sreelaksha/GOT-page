import React from "react";
import HouseService from "../../services/HouseService";
import {
  Card,
  CardContainer,
  PaginationContainer,
  FilterCard,
} from "../../styles/StyleComponent";
import { getIdFromUrl } from "../../utils";
import Page from "../common/Page";
import Pagination from "../common/Pagination";
import { Box, Menu, Text, Button } from "grommet";
import { FormDown as FilterIcon, Close as CancelIcon } from "grommet-icons";

export default class HousesComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      filter: "",
      filterSelected: "",
    };
  }
  componentDidMount() {
    this.loadHouses(1);
  }

  handleCardClick = (house) => {
    const houseId = getIdFromUrl(house.url);
    this.props.history.push(`/house/${houseId}`);
  };

  handleFilter = (filterValue, filterSelected) => {
    console.log(filterValue);
    this.setState(
      {
        filter: filterValue,
        filterSelected: filterSelected,
      },
      () => this.loadHouses(1)
    );
  };

  loadHouses = ({ page }) => {
    HouseService.getAllHouses(page, this.state.filter).then((result) => {
      this.setState({
        houses: result,
      });
    });
  };

  render() {
    return (
      <Page>
        <h1>HOUSES</h1>
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
              label="Region"
              dropBackground="black"
              icon={<FilterIcon color="light-1" />}
              items={[
                {
                  label: "The Westerlands",
                  onClick: () => {
                    this.handleFilter(
                      "&region=The Westerlands",
                      "The Westerlands"
                    );
                  },
                },
                {
                  label: "The Crownlands",
                  onClick: () => {
                    this.handleFilter(
                      "&region=The Crownlands",
                      "The Crownlands"
                    );
                  },
                },
                {
                  label: "Dorne",
                  onClick: () => {
                    this.handleFilter("&region=Dorne", "Dorne");
                  },
                },
                {
                  label: "The North",
                  onClick: () => {
                    this.handleFilter("&region=The North", "The North");
                  },
                },
                {
                  label: "The Reach",
                  onClick: () => {
                    this.handleFilter("&region=The Reach", "The Reach");
                  },
                },
                {
                  label: "The Riverlands",
                  onClick: () => {
                    this.handleFilter(
                      "&region=The Riverlands",
                      "The Riverlands"
                    );
                  },
                },
                {
                  label: "The Vale",
                  onClick: () => {
                    this.handleFilter("&region=The Vale", "The Vale");
                  },
                },
                {
                  label: "The Stormlands",
                  onClick: () => {
                    this.handleFilter(
                      "&region=The Stormlands",
                      "The Stormlands"
                    );
                  },
                },
              ]}
            />
          </FilterCard>
        </Box>

        <CardContainer>
          {this.state.houses.map((house, index) => (
            <Card key={index} onClick={this.handleCardClick.bind(this, house)}>
              <h2> {house.name} </h2>
              <p>{house.region}</p>
            </Card>
          ))}
        </CardContainer>
        <PaginationContainer>
          <Pagination handlePagination={this.loadHouses} noOfPages={444} />
        </PaginationContainer>
      </Page>
    );
  }
}
