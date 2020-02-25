import React from 'react';

function CreateParty (props) {
  const nameRef = React.useRef('')
    return (
      <div data-test="create-party">
        <form
          onSubmit={(e) => {
            props.createParty(e, nameRef.current.value)
            props.history.push('/parties')
            props.takeStep()
          }}
        >
          <label>
            Party Name:
            <input 
              name="party_name"
              type="text" 
              ref={nameRef}
            />
          </label>
          <button class='create-button'>Create</button>
        </form>
      </div>
    );
}

export default CreateParty;
