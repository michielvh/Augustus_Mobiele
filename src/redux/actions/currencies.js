export const selectCurrency = (currencyType) => {
    return {
      type: 'SELECT_CURRENCY',
      payload: 
      {
        base: currencyType
      }
    };
}


