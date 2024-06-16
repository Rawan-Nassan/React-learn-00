
import { MouseEvent } from "react";
function ListGroup() {
    const items =[ 'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'  ];

    const handleClick = (event:MouseEvent) => console.log(event);

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.length === 0 && <li className="list-group-item">No item found</li>}
            {items.map(item => 
                <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>

            )}
        </ul>
    </>    

    )
}

export default ListGroup;