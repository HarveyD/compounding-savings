import {combineReducers} from 'redux';
import SavingsList from './reducer-savings';
import ActiveSaving from './reducer-active-saving';
import Settings from './reducer-settings';
import ChartData from './reducer-chart-data';

import { reducer as formReducer } from 'redux-form';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    savings: SavingsList,
    activeSaving: ActiveSaving,
    chartState: ChartData,
    settings: Settings,

    form: formReducer
});

export default allReducers
