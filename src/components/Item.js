import './Item.css'

function Item(props){
    const name=props.name;

    return(

        <div>
            <h1  className="Heading" >
                {name}
            </h1>
        </div>

    );


}
export default Item;