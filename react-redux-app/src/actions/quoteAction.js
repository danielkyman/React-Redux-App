import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_QUOTE = "UPDATE_QUOTE";
export const ERROR = "ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_QUOTE, payload: res.data });
    })
    .catch(err => {
      console.log("error fetching data from api - ", err);
      dispatch({
        type: ERROR,
        payload: "Error fetching data from api, try again"
      });
    });
};
