
 const init = {
     expenses:[{expenseID:'eee', amount:500, currency:'EUR', date:'08/06/2018', description:'eten dag 1', tripID:'eeer', categorie:'Overige', items:['itemeee1','itemeee2']},
     {expenseID:'aaa', amount:700, currency:'USD', date:'08/06/2018', description:'eten dag 2', tripID:'eeer', categorie:'Overige', items:['itemaaa1','itemaaa2']}

         /* {
    expenseID:'', description: 'drank dag2', amount: 5, datum:'datum',currency:'currencyID',categorie:'',
     items:[{ itemId:'id toevoegen aan expense in action en in app alle kostitemIDs ophalen en amounts optellen'},
    {itemId:'id'}]
     } */]
 }

  const reducer = (state=init, action) => {
  switch(action.type) {
    case 'CREATE_NEW_EXPENSE':
     // state.amount=state.amount+action.payload.amount;
        return {...state,
         expenses: [...state.expenses, action.payload]};
        
    case 'ADD_ITEM_TO_EXPENSE2':
    //state.map (zie hieronder),zoeken naar state.expenses , dan expenseID zoeken (eerst createexpense doen wel)
    //en dan zoeken naar juiste expenseID, en dan itemID aan lijst toevoegen
    state.amount=state.amount+action.payload.amount;
        return {...state,
         item: [...state.item, action.payload]};
        
    case 'ADD_ITEM_TO_EXPENSE':
       /*  return state.expenses.map(t => {
            if(t.expenseID === action.payload.expenseID) {
             //   return t.update('items', t.items.push(action.payload.itemID) );
                 t.items.push(action.payload.itemID) 

              } 
              return t;
        }); 
      var x=  state.expenses.map(function(key, val, array){
        
    if(key.expenseID===action.payload.expenseID){
        return key;
    }
            
            })
            var l=state.expenses;
            l[x].items.push(action.payload.itemID);
          return  {...state,
                expenses: [l]};
        
        */
        for(var x of state.expenses){
            if(x.expenseID===action.payload.expenseID){
                x.items.push(action.payload.itemID);
            }
        }
        return {...state,
            expenses: [...state.expenses]}

       /*  state.expenses.map(t => {
            if(t.expenseID === action.payload.expenseID) {
             //   return t.update('items', t.items.push(action.payload.itemID) );
                 t.items.push(action.payload.itemID) 

              } 
             // return {...state.expenses,expenses:t};
            return {expenses:state.expenses};
        });
       // return {...state,expenses:[x]
           };  */
        case 'ADD_BETALING':
        state.amount=state.amount-action.payload.amount;
        return {...state,
           betaling: [...state.betaling, action.payload]};

           case 'UPDATE_EXPENSE':
        

           for(var x of state.expenses){
             if(x.expenseID===action.payload.expenseID){
               //state.items.pop(x)
                // x.items.push(action.payload.itemID);
                x.amount=action.payload.amount;
                x.categorie=action.payload.categorie;
                x.items=action.payload.items;
                x.description=action.payload.description;
                x.currency=action.payload.currency;
             }
         }
         return {...state,
             expenses: [...state.expenses]};
    default:
      return state;
  }
}

export default reducer