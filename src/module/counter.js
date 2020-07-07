const INCREASE = "Increase";
const DECREASE = "Decrease";
const SET_DIFF = "SetDiff";

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const setDiff = (diff) => ({
  type: SET_DIFF,
  diff,
});

const initialState = {
  value: 0,
  diff: 1,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + state.diff,
      };

    case DECREASE:
      return {
        ...state,
        value: state.value - state.diff,
      };

    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };

    default:
      return state;
  }
}
