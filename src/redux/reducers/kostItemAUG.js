const init = {
    
   items:[/* {  itemID:0,
      amount:1,  description: 'drank dag 1', betaaldDoor:'jan/ofID', betaaldVoor:[{persoon:'jan/id'},{persoon:'naam/id'}],
    expenseID:'en dan '} */]
      
 }

 const reducer = (state=init, action) => {
    switch(action.type) {
      case 'ADD_ITEM':

          return {...state,
            items:[...state.items,action.payload]};
          
      case 'UPDATE_ITEM':
        

          for(var x of state.items){
            if(x.itemID===action.payload.itemID){
              //state.items.pop(x)
               // x.items.push(action.payload.itemID);
               x.amount=action.payload.amount;
               x.betaaldDoor=action.payload.betaaldDoor;
               x.betaaldVoor=action.payload.betaaldVoor;
               x.description=action.payload.description;
            }
        }
        return {...state,
            items: [...state.items]};


          case 'ADD_BETALING':
          state.amount=state.amount-action.payload.amount;
          return {...state,
             betaling: [...state.betaling, action.payload]};
      default:
        return state;
    }
  }
  
  export default reducer