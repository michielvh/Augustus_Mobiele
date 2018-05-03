import { getCurrencyDataFor } from "../actions/currencies";
import currencies from './allCurrencies';

export const reducer = (state='', action) => 
{
    console.log(action.payload);
    switch(action.type) 
    {
        case 'SELECT_CURRENCY' : 
            return selectCurrencyWithBase(action.payload.base);
        break;
        default : return state; 
    };
};

const selectCurrencyWithBase = ( base ) => 
{
    /*Object.entries(currencies).map(( item ) => 
    {
        if (item.base === base) { return item; }
    }
    );*/
    return '';
  
} 


export default reducer; 