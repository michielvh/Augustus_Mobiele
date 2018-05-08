import { combineReducers } from 'redux';
import trips from './trips';
import expenses from './expenses';
import expense from './expense';
import personen from './personen';
import selectCurrency  from './currencies';
import allCurrencies from './allCurrencies';
import expenseAUG from './expenseAUG';
import kostItemAUG from './kostItemAUG';
import categories from './categories';

export default combineReducers({
    trips,
    expenses,
    expense,
    personen,
    selectCurrency,
    allCurrencies,
    expenseAUG,
    kostItemAUG,
    categories
});
