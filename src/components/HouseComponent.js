import React from 'react'
import HouseService from '../services/HouseService'
import styled from 'styled-components'
import CardComponent from '../styles/CardComponent'
import {getIdFromUrl} from '../utils'
import Page from './shared/Page'
import Pagination from './shared/Pagination'


const HouseCardContainer = styled.section`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        //for smartphones
        @media(min-width: 320px) and (max-width: 480px){
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }

        //for tablets, iPads
        @media(min-width: 481px) and (max-width: 768px){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        //for small screens, laptops
        @media(min-width: 769px) and (max-width: 1024px){
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        //for large screens, desktop
        @media(min-width: 1300px){
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
`
export default class HouseComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            houses: [],
        }
    }
    componentDidMount() {
        this.loadHouses(1);
    }

    handleCardClick = (house) => {
        const houseId = getIdFromUrl(house.url)
        this.props.history.push(`/house/${houseId}`);
    }

    loadHouses = ({page}) => {
        HouseService.getAllHouses(page)
            .then(result => {
                this.setState({
                    houses: result
                })
            })
    }

    render(){
        return(
            <Page>
                <h1>HOUSES</h1>
                    <HouseCardContainer>
                       {this.state.houses.map(
                            (house, index) => 
                            <CardComponent key={index} onClick={this.handleCardClick.bind(this,house)}>
                                <h2> {house.name} </h2>
                                <p>{house.region}</p>
                            </CardComponent> 
                        )} 
                    </HouseCardContainer> 
                    <Pagination
                        handlePagination={this.loadHouses}
                    />
            </Page>
        )
    }
}
