import './ItemDate.css'

function ItemDate(props){
    const date=props.date;
    const month=props.month;
    const year=props.year;
    return(

<div>
    <div className="Itemd" >
    <span>{date}</span>
    <span>{month}</span>
    <span>{year}</span>
    </div>
</div>

    );
}
export default ItemDate;