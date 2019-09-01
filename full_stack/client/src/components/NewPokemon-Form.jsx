import React from 'react';
import pokemonTypes from '../pokemonTypes';

const Form = (props) => {
  const { handleClick } = props;
  let types = Object.keys(pokemonTypes);
  return (
    <div>
        <div className="field columns">
          <div className="column">
            <label className="label">No.</label>
            <div className="control">
              <input className="input" type="text" placeholder="No. 808 and on" />
            </div>
          </div>
          <div className="column">
            <label className="label">Pokémon Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Enter Name" />
            </div>
          </div>
        </div>

        <div className="field columns">
          <div className="column">
            <label className="label">Type 1</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select type</option>
                  {types.map((type, i) => <option key={i}>{type}</option>)}
                </select>
              </div>
            </div>
          </div>
          <div className="column">
            <label className="label">Type 2</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select type</option>
                  {types.map((type, i) => <option key={i}>{type}</option>)}
                  <option>types</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Image Url</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter url" />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text" onClick={handleClick}>Cancel</button>
          </div>
        </div>
      </div>
  )
}

export default Form;