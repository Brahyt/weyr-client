import React from 'react';

class EditCharacter extends React.Component {
  constructor(props){
    super(props)
    const [stickers] = this.props.characters.filter(character => {
      return character.char_id === this.props.character.char_id
    })
    const {character} = this.props
    this.state = {
      char_id: character.char_id,
      name: character.name,
      race: character.race,
      char_class: character.char_class,
      sub_class: character.sub_class,
      xp: character.xp,
      hand_size: character.hand_size,
      health: character.health,
      party_id: character.party_id,
      user_id: character.user_id,
      sticker_1_id: stickers.sticker_1_id,
      sticker_2_id: stickers.sticker_2_id,
      sticker_3_id: stickers.sticker_3_id,
      sticker_4_id: stickers.sticker_4_id,
      sticker_5_id: stickers.sticker_5_id,
      sticker_6_id: stickers.sticker_6_id,
      equipment_pack_id: stickers.equipment_pack_id,
      arcane: character.equipment.arcane,
      deception: character.equipment.deception,
      martial: character.equipment.martial,
      devotion: character.equipment.devotion
    }
  }
  handleChange(event){
    const target = event.target.name
    this.setState({
      [target]: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.props.editChar(e, this.state)  //<HERE, changing to edit
            this.props.history.push('/characters')
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
            <input 
              id= "xp" 
              name= "xp"
              type="number" 
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Hand Size:
            <input 
              id="hand_size" 
              name="hand_size"
              type="number" 
              value={this.state.hand_size}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Health:
            <input 
              id="health"
              name="health"
              type="number"
              value={this.state.health}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Party:
            <select
              id="party_id"
              name="party_id"
              value={this.state.party_id}
              onChange={(e) => this.handleChange(e)}
            >
              {this.props.parties.map(party => {
                return <option key={party.party_id} value={party.party_id}>{party.name}</option>
              })}
            </select>
          </label>
          <label>
            Arcane:
            <input
              id="arcane"
              name="arcane"
              type="number"
              value={this.state.arcane}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Deception:
            <input 
              id="deception" 
              name="deception"
              type="number" 
              value={this.state.deception}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Martial:
            <input 
              id="martial"
              name="martial"
              type="number"
              value={this.state.martial}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Devotion:
            <input 
              id="devotion" 
              name="devotion"
              type="number" 
              value={this.state.devotion}
              onChange={(e) => this.handleChange(e)}
            />
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
          <button
          >Create</button>
        </form>
      </div>
    );
  }
}
export default EditCharacter;
