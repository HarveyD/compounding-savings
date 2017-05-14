/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

const initialElements = [
        {
            id: 1,
            type: "Coffee",
            amount: 30,
            investment: "Shares",
            frequency: "Monthly"
        },
        {
            id: 2,
            type: "DVD's",
            amount: 10,
            investment: "Shares",
            frequency: "Weekly"
        },
        {
            id: 3,
            type: "Coffee",
            amount: 3,
            investment: "Shares",
            frequency: "Daily"
        }
];

export default function (state = initialElements, action) {
    switch(action.type){
        case "CREATE_SAVING":
        return [...state, {
                id: state.length+1,
                type: "",
                investment: "",
                frequency: "",
                amount: 0}];
            break;
        case "UPDATE_SAVING":

            break;
        case "DELETE_SAVING":
            return state.filter(x => x !== action.payload);
            break
    }
    return state;
}
