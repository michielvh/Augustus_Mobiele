import { List, Map } from 'immutable';

 const init = {
   
  trips: [{ id: 'eeer', isFinished: true,  text: 'Bahamas',currency:'EUR', currencies:['EUR','USD']}]
 }

  const reducer = (state=init, action) => {
  switch(action.type) {
    case 'ADD_TRIP':
    
        return {
          ...state,
          trips: [...state.trips,action.payload]
        };

        
    case 'TOGGLE_FINISH_TRIP':
        return state.map(t => {
            if(t.get('id') === action.payload) {
                return t.update('isFinished', isFinished => !isFinished);
              } 
              return t;
        });
  case 'e':
         let newState = {}
            state.forEach( (trip) => {
              let id = trip.id
              newState[id] = Object.assign({}, trip, { id });
                  })
    
                  return newState;
          
    default:
      return state;
  }
}

export default reducer
