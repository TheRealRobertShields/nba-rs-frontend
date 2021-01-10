import * as api from '../API';

export const getSchedule = () => async (dispatch) => {
    const { data } = await api.fetchSchedule();
    dispatch({ type: 'FETCH_ALL_SCHEDULES', payload: data});
}