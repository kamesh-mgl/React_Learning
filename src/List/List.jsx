
function List({items = [],category = "category"}) {
    // const category = props.category;
    // const itemlist = props.items;

    console.log(category)

    // console.log(category, itemlist)

    const displayList = items.length > 0 ? items.map((ele) => <li key={ele.id}>{ele.name}</li>) : null;

    return (
        <div className="item">
            <h2 className="category">{category}</h2>
            <ul>
                {displayList}
            </ul>
        </div>
    );
}
export default List;



