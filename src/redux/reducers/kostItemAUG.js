const init = {
    
   items:[{  kostItemId:0,
      amount:1,  description: 'drank dag 1', betaaldDoor:'jan/ofID', betaaldVoor:[{persoon:'jan/id'},{persoon:'naam/id'}],
    eventueelExpenseID:'en dan '}]
      
 }

 const reducer = (state=init, action) => {
    switch(action.type) {
      case 'ADD_ITEM':

          return {...state,
            items:[...state.items,action.payload]};
          
      case 'UPDATE_ITEM':
          return state.map(t => {
              if(t.get('id') === action.payload) {
                  return t.update('isFinished', isFinished => !isFinished);
                } 
                return t;
          });
          case 'ADD_BETALING':
          state.amount=state.amount-action.payload.amount;
          return {...state,
             betaling: [...state.betaling, action.payload]};
      default:
        return state;
    }
  }
  
  export default reducer