export const createSaving = () => {
    return {
        type: 'CREATE_SAVING'
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