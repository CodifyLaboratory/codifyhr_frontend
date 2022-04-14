const initialState  = {
    items: [],
    isLoaded: false
};

const resumes = (state = initialState, action) => {
    if(action.type === 'SET_RESUMES') {
        return {
            ...state,
            items: action.payload
        };
    }
    return state;
}

export default resumes;