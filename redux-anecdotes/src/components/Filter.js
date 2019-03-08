import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filtteri = props => {
  const handleChange = event => {
    const newFilter = event.target.value;
    props.setFilter(newFilter);
  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = {
  setFilter
};

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtteri);

export default Filter;
