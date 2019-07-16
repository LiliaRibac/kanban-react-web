import {CONSTANTS} from "../actions"

let listID =2;
let cardID = 4;

const initialState =[
    {
        title: "First list",
        id:0,
        cards:[
            {
                id:0,
                text:"todo"
            },
            {
                id:1,
                text:"doing"
            }
        ]
    },
    {
        title: " Second list ",
        id:1,
        cards:[
            {
                id:0,
                text:"todo1"
            },
            {
                id:1,
                text:"doing1"
            },
            {
                id:2,
                text:"done"
            },
            {
                id:3,
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
                id:listID

            }
            listID +=1;
            return [...state, newList];

            case CONSTANTS.ADD_CARD:
                const newCard ={
                    text:action.payload.text,
                    id:cardID
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