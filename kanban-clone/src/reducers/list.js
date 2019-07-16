import {CONSTANTS} from "../actions"

let listID =2;
let cardID = 6;

const initialState =[
    {
        title: "First list",
        id: `list-${0}`,
        cards:[
            {
                id:`card -${0}`,
                text:"todo"
            },
            {
                id:`card -${1}`,
                text:"doing"
            }
        ]
    },
    {
        title: " Second list ",
        id:`list-${1}`,
        cards:[
            {
                id:`card -${2}`,
                text:"todo1"
            },
            {
                id:`card -${3}`,
                text:"doing1"
            },
            {
                id:`card -${4}`,
                text:"done"
            },
            {
                id:`card -${5}`,
                text:"done well"
            }
           
        ]
    }
]

const list = (state = initialState, action) =>{
    switch (action.type)
    {
        case CONSTANTS.ADD_LIST:
            const newList ={
                title: action.payload,
                cards:[],
                id:`list-${listID}`

            }
            listID +=1;
            return [...state, newList];

            case CONSTANTS.ADD_CARD:
                const newCard ={
                    text:action.payload.text,
                    id:`card-${cardID}`
                }
                cardID +=1;
               const newState= state.map(list => {if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards,newCard]
                    }
                }else{
                    return list
                }
                });
                return newState;
        default:

            return state;
    }
}
export default list;