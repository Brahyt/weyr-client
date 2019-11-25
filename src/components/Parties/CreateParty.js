import React from 'react';
import { NavLink } from 'react-router-dom';
import PartiesList from './PartiesList';

class CreateParty extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render(){
    return (
      <div>
        <form
          onSubmit={(e) => this.props.createParty(e, this.state.name)}
        >
          <label>
            Party Name:
            <input 
              name="party_name"
              type="text" 
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <button>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateParty;
