/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            savingType: "Coffee",
            investment: "Shares",
            frequency: "Monthly",
            amount: 30
        },
        {
            id: 2,
            savingType: "DVD's",
            investment: "Shares",
            frequency: "Weekly",
            amount: 10
        },
        {
            id: 3,
            savingType: "Coffee",
            investment: "Shares",
            frequency: "Daily",
            amount: 3
        }
    ]
}
