import React from "react";
import { connect } from "react-redux";

const QuoteDisplay = props => {
  console.log(props);
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          <h2 className="quote">{props.quote.en}</h2>
          <h4 className="author">{props.quote.author}</h4>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(QuoteDisplay);
