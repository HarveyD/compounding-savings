export default function (state = null, action) {
    switch(action.type){
        case 'UPDATE_SAVING':
            return null;
    }

    if(action.type != 'SAVING_SELECTED'){
        return state;
    }

    return action.payload;
}
