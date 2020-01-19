import React, { useContext } from "react";
import Title from "../components/Title";
import ResortContext from "../context/resortContext";
const RoomsFilter = () => {
  const resortContext = useContext(ResortContext);
  const {
    onChange,
    type,
    capacity,

    minPrice,
    maxPrice,

    currentCapacity,
    currentPrice,
    currentType,

    currentBreakFast,
    currentPets
  } = resortContext;

  const types = type.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const capacities = capacity.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={currentType}
            onChange={event => onChange(event)}
            className='form-control'
          >
            {types}
          </select>
        </div>

        {/* end select type */}
        {/* people */}
        <div className='form-group'>
          <label htmlFor='capacity'>guests</label>
          <select
            className='form-control'
            name='capacity'
            id='capacity'
            value={currentCapacity}
            onChange={event => onChange(event)}
          >
            {capacities}
          </select>
        </div>

        {/* end people*/}
        {/* priece*/}

        <div className='form-group'>
          <label htmlFor='price'>room price ${currentPrice}</label>
          <input
            className='form-control'
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={currentPrice}
            onChange={event => onChange(event)}
          />
        </div>
        {/* end price*/}

        {/* extras*/}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={currentBreakFast}
              onChange={event => onChange(event)}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={currentPets}
              onChange={event => onChange(event)}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras*/}
      </form>
    </section>
  );
};

export default RoomsFilter;
