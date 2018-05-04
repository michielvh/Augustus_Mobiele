export const addItem = (kostItemId,amount,description,betaaldDoor,betaaldVoor,eventueelExpenseID) => {
    return {
      type: 'ADD_ITEM',
      payload: {
        
        kostItemId,
      amount,  
      description, 
      betaaldDoor, 
      betaaldVoor,
    eventueelExpenseID
        
      }
    };
}
export const addItemToExpense = (itemID,expenseID) => {
    return {
      type: 'ADD_ITEM_TO_EXPENSE',
      payload: {
        expenseID,
        itemID
        
      }
    };
}
export const createNewExpense = (expenseID) => {
    return {
      type: 'CREATE_NEW_EXPENSE',
      payload: {
        expenseID 
      }
    };
}
export const addBetaling = (amount,naam) => {
  return {
    type:'ADD_BETALING',
    payload: {
      naam,
      amount:int(amount)
      
      
    }
  };
}


export const updateItem = (users) => {
    return {
      type: 'UPDATE_ITEM',
      payload: {
        
        
        users
        
      }
    };
}
const int=(x) => Number.parseInt(x);


