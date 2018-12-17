
const initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
}
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';

function loanType(loanType){
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType,
  }
}

function property(property){
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  }
}


function reducer(state = initialState, action){
  switch (action.type){
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, {loanType: action.payload})
    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, {propertyType: action.payload})
    default : return state
  }

}

export default reducer;