import axios from 'axios';

export const PULLING_CARD = 'PULLING_CARD';
export const PULLED_CARD = 'PULLED_CARD';
export const PULL_FAILED = 'PULL_FAILED';

//THUNK FUNCTION GOES IN YOUR ACTIONS FOLDER NOW
//ITS THAT THING THERE V
export const getCard = () => {

    return(dispatch => {

        dispatch({type:PULLING_CARD});

        axios
            .get('https://api.pokemontcg.io/v1/cards?setCode=base1')
            .then(res => {

                dispatch({type:PULLED_CARD, payload:res.data.cards.[Math.floor(Math.random() * 100)].imageUrlHiRes})

            })
            .catch(err => {
                dispatch({type:PULL_FAILED, payload: err.response.message})
            })

    })
}