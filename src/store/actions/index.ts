export const addSchedule = ( scheduleData ) => {
    return ( dispatch ) => {
        dispatch({
            type: "ADD_SCHEDULE",
            payload: scheduleData
        })
    }
}

export const updateSchedule = ( updateData ) => {
    return ( dispatch ) => {
        dispatch({
            type: "UPDATE_SCHEDULE",
            payload: updateData
        })
    }
}

export const deleteSchedule = ( id ) => {
    return ( dispatch ) => {
        dispatch({
            type: "DELETE_SCHEDULE",
            payload: id
        })
    }
}

