export const selectSaving = (saving) => {
    console.log("You clicked on saving: ", saving);
    return {
        type: 'SAVING_SELECTED',
        payload: saving
    }
};
