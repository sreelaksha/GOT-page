import React from "react"
import HouseService from "../services/HouseService"

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
            <div>
                <h2>Game Of Thrones Overview</h2>
                {this.state.houses.map(
                    (house) => 
                        <p> {house.name} </p>
                )}    
            </div>
        )
    }
}