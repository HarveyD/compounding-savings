/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */
const initialSettings = {
    active: false,
    interestRate: 0.07,
    compoundingFrequency: 12,
    yearsShown: 25,
    combineSavings: false
};

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = initialSettings, action) {
    switch(action.type){
        case 'TOGGLE_SETTINGS':
            const newSettings = Object.assign({}, state);
            newSettings.active = !newSettings.active;
            return newSettings;
        case 'UPDATE_SETTINGS':
            action.payload.active = false;
            return action.payload;
        default:
            return state;
    }
}
