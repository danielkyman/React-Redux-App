import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/quoteAction";

const QuoteForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <h4 className="loading">Loading Quote ...</h4>
      ) : (
        <button className="button-load" onClick={handleGetData}>
          Load Quote
        </button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(QuoteForm);
