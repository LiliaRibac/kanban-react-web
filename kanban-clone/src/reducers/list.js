const initialState =[
    {
        title: "Last Episode",
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
    }
]

const list = (state = initialState, action) =>{
    switch (action.type){
        default:
            return state;
    }
}
export default list;