import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCard} from '../actions/actions'


const PokeCards=({pulledCards, getCard, isPulling})=> {
    
    if (isPulling) {
        return <h3>Pulling Card From Booster Pack ...</h3>
    }

    const handleClick = () => {
        getCard();
    }

    return(
        <div>
           <button onClick={handleClick}>Pull A Card</button>
               <div>
                    {pulledCards.map(card => {
                        return(
                            <img  style={{width:'20%'}} src={card} alt=''/>
                        )
                    })}
                </div> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pulledCards: state.pulledCards,
        isPulling: state.isPulling
    }
}

export default connect(mapStateToProps, {getCard})(PokeCards);