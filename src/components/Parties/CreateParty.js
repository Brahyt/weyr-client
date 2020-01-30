import React from 'react';

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
      <div data-test="create-party">
        <form
          onSubmit={(e) => {
            this.props.createParty(e, this.state.name)
            this.props.history.push('/parties')
            this.props.takeStep()
          }}
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
          <button class='create-button'>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateParty;
