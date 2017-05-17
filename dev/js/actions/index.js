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

// SETTINGS

export const updateSettings = (settings) => {
    return {
        type: 'UPDATE_SETTINGS',
        payload: settings
    }
}

export const toggleSettings = () => {
    return {
        type: "TOGGLE_SETTINGS"
    }
}