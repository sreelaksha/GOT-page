import React from "react"
import HouseService from "../services/HouseService"
import styled from 'styled-components'

const OverviewWrapper= styled.div`

`
const HouseCardContainer = styled.section`
        display: grid;
        grid-template-rows: auto;
        grid-gap: 20px;
`

const HouseCard= styled.div`
        border: 1px solid rgba(0, 0, 20, 0.1);
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
        padding: 10px;
        margin: 10px 0;
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
    render(){
        return(
            <OverviewWrapper>
                <h1>Game Of Thrones Overview</h1>
                <HouseCardContainer>
                    {this.state.houses.map(
                        (house, index) => 
                        <HouseCard key={index}>
                            <p> {house.name} </p>
                            <p>{house.region}</p>
                        </HouseCard>
                    )}  
                </HouseCardContainer>  
            </OverviewWrapper>
        )
    }
}