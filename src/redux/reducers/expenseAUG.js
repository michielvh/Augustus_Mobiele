
 const init = {
     expenses:[{
    id:'', description: 'drank dag2', amount: 5, datum:'datum',currency:'currencyID',
     items:[{ itemId:'id toevoegen aan expense in action en in app alle kostitemIDs ophalen en amounts optellen'},
    {itemId:'id'}]
     }]
      
 }

  const reducer = (state=init, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_EXPENSE':
    //state.map (zie hieronder),zoeken naar state.expenses , dan expenseID zoeken (eerst createexpense doen wel)
    //en dan zoeken naar juiste expenseID, en dan itemID aan lijst toevoegen
    state.amount=state.amount+action.payload.amount;
        return {...state,
         item: [...state.item, action.payload]};
        
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