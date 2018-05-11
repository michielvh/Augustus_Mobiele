export const addItem = (amount,description,user) => {
    return {
      type: 'ADD_ITEM',
      payload: {
        
        amount:int(amount),
        description,
        user
        
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
      type: 'UPDATE_ITEMe',
      payload: {
        
        
        users
        
      }
    };
}
const int=(x) => Number.parseInt(x);


