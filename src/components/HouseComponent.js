import React from 'react'
import HouseService from '../services/HouseService'
import styled from 'styled-components'
import CardComponent from './CardComponent'
import {getIdFromUrl} from '../utils'

const OverviewWrapper= styled.div`
    
`
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
        HouseService.getAllHouses()
            .then(result => {
                this.setState({
                    houses: result
                })
            })
    }

    handleCardClick = (house) => {
        const houseId = getIdFromUrl(house.url)
        this.props.history.push(`/house/${houseId}`);
    }

    render(){
        return(
            <OverviewWrapper>
                <h1>GAME OF THRONES HOUSES</h1>
                    <HouseCardContainer>
                       {this.state.houses.map(
                            (house, index) => 
                            <CardComponent key={index}>
                            <div onClick={this.handleCardClick.bind(this,house)}>
                                <h2> {house.name} </h2>
                                <p>{house.region}</p>
                            </div>
                            </CardComponent> 
                        )}       
                    </HouseCardContainer> 
            </OverviewWrapper>
        )
    }
}
