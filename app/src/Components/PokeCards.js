import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCard} from '../actions/actions'


const PokeCards=({pulledCards, getCard})=> {
    
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
        pulledCards: state.pulledCards
    }
}

export default connect(mapStateToProps, {getCard})(PokeCards);