// eslint-disable-next-line
export default (schedules = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_SCHEDULES':
            return action.payload;
        default:
            return schedules;
    }
}