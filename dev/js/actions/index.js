export const createSaving = (saving) => {
    return {
        type: 'CREATE_SAVING',
        payload: saving
    }
};

export const selectSaving = (saving) => {
    return {
        type: 'SAVING_SELECTED',
        payload: saving
    }
};

export const updateSaving = (saving) => {
    return {
        type: 'UPDATE_SAVING',
        payload: saving
    }
};

export const deleteSaving = (saving) => {
    return {
        type: 'DELETE_SAVING',
        payload: saving
    }
};