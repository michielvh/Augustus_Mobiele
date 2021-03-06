export const addItem = (kostItemId,amount,description,betaaldDoor,betaaldVoor,expenseID) => {
    return {
      type: 'ADD_ITEM',
      payload: {
        
        itemID:kostItemId,
        amount:double(amount),  
      description, 
      betaaldDoor, 
      betaaldVoor,
    expenseID
        
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
export const createNewExpense = (expenseID,amount,description,tripID,categorie,date,items,currency) => {
    return {
      type: 'CREATE_NEW_EXPENSE',
      payload: {
        expenseID ,amount : double(amount),description,tripID,categorie,date,items,currency
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

export const updateItem = (kostItemId,amount,description,betaaldDoor,betaaldVoor,expenseID) => {
  return {
    type: 'UPDATE_ITEM',
    payload: {
      
      itemID:kostItemId,
      amount:double(amount),  
    description, 
    betaaldDoor, 
    betaaldVoor,
  expenseID
      
    }
  };
}

export const updateExpense = (expenseID,amount,description,tripID,categorie,date,items,currency) => {
  return {
    type: 'UPDATE_EXPENSE',
    payload: {
      expenseID ,amount : double(amount),description,tripID,categorie,date,items,currency
    }
  };
}

const int=(x) => Number.parseInt(x);
const double=(x) => Number.parseFloat(x);
const uid = () => Math.random().toString(34).slice(2);

