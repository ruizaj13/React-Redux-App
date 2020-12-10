import {PULLING_CARD, PULLED_CARD, PULL_FAILED } from '../actions/actions';

const initialState = {
    pulledCards:[],
    isPulling: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case PULLING_CARD:
            return ({...state,
                isPulling: true,
                error: ''
            });
        case PULLED_CARD:
            return ({...state,
                pulledCards: [...state.pulledCards, action.payload ],
                isPulling:false
            })
        case PULL_FAILED:
            return({...state,
                error: action.payload
            })

        default: 
            return state;
    }
}