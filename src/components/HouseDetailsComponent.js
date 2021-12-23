import React from 'react'
import HouseService from '../services/HouseService'
import AttributeValueComponent from './AttributeValueComponent'
import CardComponent from './CardComponent'
import { withRouter } from "react-router-dom";

class HouseDetailsComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            houseDetails: null,
            //use the param from the url
            id: this.props.match.params.id,
        }
    }
    
    componentDidMount() {
        HouseService.getHouse(this.state.id)
            .then(result => {
                        this.setState({houseDetails : result,
                   })
            }) 
        }
    
    render(){
        return(
            <div>
                <h1> House Details </h1>
                {this.state.houseDetails && (
                    <section>
                            <CardComponent>
                                <AttributeValueComponent label="Name" value={this.state.houseDetails.name} />
                                <AttributeValueComponent label="Region" value={this.state.houseDetails.region} />
                                <AttributeValueComponent label="Coat Of Arms" value={this.state.houseDetails.coatOfArms} />
                                <AttributeValueComponent label="Words" value={this.state.houseDetails.words} />
                                <AttributeValueComponent label="Titles" value={this.state.houseDetails.titles} />
                                <AttributeValueComponent label="Seats" value={this.state.houseDetails.seats} />
                                <AttributeValueComponent label="Current Lord" value={this.state.houseDetails.currentLord} />
                                <AttributeValueComponent label="Heir" value={this.state.houseDetails.heir} />
                                <AttributeValueComponent label="Overlord" value={this.state.houseDetails.overlord} />
                                <AttributeValueComponent label="Founded" value={this.state.houseDetails.founded} />
                                <AttributeValueComponent label="Founder" value={this.state.houseDetails.founder} />
                                <AttributeValueComponent label="Died Out" value={this.state.houseDetails.diedOut} />
                                <AttributeValueComponent label="Ancestral Weapons" value={this.state.houseDetails.ancestralWeapons} />
                                <AttributeValueComponent label="Cadet Branches" value={this.state.houseDetails.cadetBranches} />
                                <AttributeValueComponent label="Sworn Members" value={this.state.houseDetails.swornMembers} />
                            </CardComponent>
                    </section>
                )}
            </div>
        )
    }
}

export default withRouter(HouseDetailsComponent);