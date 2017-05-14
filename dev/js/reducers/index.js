import {combineReducers} from 'redux';
import SavingsList from './reducer-savings';
import ActiveSaving from './reducer-active-saving';
import ChartData from './reducer-chart-data';

import { reducer as formReducer } from 'redux-form';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    savings: SavingsList,
    activeSaving: ActiveSaving,
    chartData: ChartData,

    form: formReducer
});

export default allReducers
