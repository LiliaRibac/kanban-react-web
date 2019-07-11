import {CONSTANTS} from "../actions"

let listID =2

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
                id:3,
                text:"done"
            }
        ]
    }
]

const list = (state = initialState, action) =>{
    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList ={
                title:action.payload,
                card:[],
                id:listID

            }
            listID +=1;
            return [...state,newList];
        default:

            return state;
    }
}
export default list;