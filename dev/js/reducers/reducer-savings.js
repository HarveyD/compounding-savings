const initialElements = [
        {
            id: 1,
            type: "Coffee",
            amount: 3,
            frequency: 365
        }
];

export default function (state = initialElements, action) {
    switch(action.type){
        case "CREATE_SAVING":
        return [...state, {
                id: state.length+1,
                type: "",
                frequency: 365,
                amount: 0}];
            break;
        case "UPDATE_SAVING":
             return state.map((item, index) => {
                if(item.id !== action.payload.id) {
                    return item;
                }

                return action.payload;    
            });
            break;
        case "DELETE_SAVING":
            return state.filter(x => x !== action.payload);
            break
    }
    return state;
}
