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
        id:0,
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
            }
        ]
    }
]

const list = (state = initialState, action) =>{
    switch (action.type){
        default:
            return state;
    }
}
export default list;