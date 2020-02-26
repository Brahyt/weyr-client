import React from 'react';
import './CreateCharacter.css'

function CreateCharacter(props) {
  const charactorReducer = (state, action) => {
    
  }
  const [state, dispatch] = React.useReducer(
    charactorReducer,
    {
      name: '',
      race: 'Human',
      char_class: 'Arcane',
      sub_class: 'Wizard',
      xp: '0',
      hand_size: '0',
      health: '0',
      party_id: '0',
      user_id: '1',
      sticker_1_id: '1',
      sticker_2_id: '1',
      sticker_3_id: '1',
      sticker_4_id: '1',
      sticker_5_id: '1',
      sticker_6_id: '1',
      arcane: '0',
      deception: '0',
      martial: '0',
      devotion: '0'
    }
  )
  const handleChange(event){
    const target = event.target.name
    this.setState({
      [target]: event.target.value
    })
  }
  const handleSubmit(event){
    event.preventDefault();
  }
  const cancelCreateChar(e){
    e.preventDefault();
    this.props.history.push('/characters')
  }
    /*standardize values from 0-15*/
    const selectNum = [...Array(16).keys()]
    return (
      <div className="char-form-container" data-test="char-form-container">
        <form
          onSubmit={(e) => {
            this.props.handleSubmitChar(e, this.state)
            this.props.history.push('/characters')
            this.props.takeStep()
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Race:
            <select
              id="race"
              name="race"
              value={this.state.race}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="Human">Human</option>
              <option value="Shield Dwarf">Shield Dwarf</option>
              <option value="Half-Orc">Half-Orc</option>
              <option value="Half-Elf">Half-Elf</option>
              <option value="Sun-Elf">Sun-Elf</option>
            </select>
          </label>
          <label>
            Class:
            <select
              id="char_class"
              name="char_class"
              onChange={(e) => this.handleChange(e)}
            >
              <option value="Arcane">Arcane</option>
              <option value="Deception">Deception</option>
              <option value="Martial">Martial</option>
              <option value="Devotion">Devotion</option>
            </select>
          </label>
          <label>
            Sub Class:
            <select
              id="sub_class"
              name="sub_class"
              onChange={(e) => this.handleChange(e)}
            >
              <option value="Wizard">Wizard</option>
              <option value="Rogue">Rogue</option>
              <option value="Fighter">Fighter</option>
              <option value="Cleric">Cleric</option>
            </select>
          </label>
          <label>
            XP:
            <select
              id="xp"
              name="xp"
              onChange={(e) => this.handleChange(e)}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Hand Size:
            <select
              id="hand_size" 
              name="hand_size"
              value={this.state.hand_size}
              onChange={(e) => this.handleChange(e)}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Health:
            <select
              id="health"
              name="health"
              value={this.state.health}
              onChange={(e) => this.handleChange(e)}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}

            </select>
          </label>
          <label className="party-choice">
            Party:
            <select
              id="party_id"
              name="party_id"
              value={this.state.party_id}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="0">None</option>
              {this.props.parties.map(party => {
                return <option 
                  key={party.party_id} 
                  value={party.party_id}>{party.name}</option>
              })}
            </select>
          </label>
          <label>
            Arcane:
            <select
              id="arcane"
              name="arcane"
              value={this.state.arcane}
              onChange={(e) => this.handleChange(e)}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}

            </select>
          </label>
          <label>
            Deception:
            <select
              id="deception" 
              name="deception"
              value={this.state.deception}
              onChange={(e) => this.handleChange(e)}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}

            </select>
          </label>
          <label>
            Martial:
            <select 
              id="martial"
              name="martial"
              value={this.state.martial}
              onChange={(e) => this.handleChange(e)}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Devotion:
            <select 
              id="devotion" 
              name="devotion"
              value={this.state.devotion}
              onChange={(e) => this.handleChange(e)}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 1:
            <select
              id="sticker_1_id"
              name="sticker_1_id"
              value={this.state.sticker_1_id}
              onChange={(e) => this.handleChange(e)}
            >
              {this.props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 2:
            <select 
              id="sticker_2_id" 
              name="sticker_2_id"
              value={this.state.sticker_2_id}
              onChange={(e) => this.handleChange(e)}
            >
              {this.props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 3:
            <select 
              id="sticker_3_id" 
              name="sticker_3_id"
              value={this.state.sticker_3_id}
              onChange={(e) => this.handleChange(e)}
            >
              {this.props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 4:
            <select 
              id="sticker_4_id"
              name="sticker_4_id"
              value={this.state.sticker_4_id}
              onChange={(e) => this.handleChange(e)}
            >
              {this.props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 5:
            <select 
              id="sticker_5_id"
              name="sticker_5_id"
              value={this.state.sticker_5_id}
              onChange={(e) => this.handleChange(e)}
            >
              {this.props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 6:
            <select 
              id="sticker_6_id"
              name="sticker_6_id"
              value={this.state.sticker_6_id}
              onChange={(e) => this.handleChange(e)}
            >
              {this.props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <button className="create-char-button">Create</button>
          <button
            onClick={(e) => this.cancelCreateChar(e)}
          >Cancel</button>
        </form>
      </div>
    );
  }
export default CreateCharacter;
