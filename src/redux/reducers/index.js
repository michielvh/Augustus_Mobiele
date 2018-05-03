import { combineReducers } from 'redux';
import trips from './trips';
import expenses from './expenses';
import expense from './expense';
import personen from './personen';
import selectCurrency  from './currencies';
import allCurrencies from './allCurrencies';

export default combineReducers({
    trips,
    expenses,
    expense,
    personen,
    selectCurrency,
    allCurrencies
});
