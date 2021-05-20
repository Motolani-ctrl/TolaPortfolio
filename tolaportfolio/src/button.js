import './button.css'

function ButtonComponent (){
    return(
        <div id= "bc">
            <p>This is button component</p>
            
        </div>

    )
}

function Button1(props){
    console.log( props )
    return(
        <div id= "b1" className={props.bg}>
            <p>This is button {props.number} {props.letter} component</p>
            
        </div>
    )
}

export { ButtonComponent, Button1 };