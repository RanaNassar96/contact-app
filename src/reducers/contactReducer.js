import { ADD_CONTACT , EDIT_CONTACT , DELETE_CONTACT } from '../actions/types'



const INITIAL_STATE = [
    {
        id: 1 ,
        name: 'rana',
        email: 'rana.nassar424@gmail.com',
        phone: '01002796424'
    }
]


const contactReducer = ( state = INITIAL_STATE , action ) => {

    switch (action.type) {
        
        case ADD_CONTACT:
            return [ ...state , action.payload ]

        case DELETE_CONTACT:
            return  [...state].filter( el => action.payload !== el.id )

        case EDIT_CONTACT:
            return [...state].filter( contact => contact.id == action.payload.id ? Object.assign( contact , action.payload) : contact );
        default:
            return state;
    }

}

export default contactReducer;