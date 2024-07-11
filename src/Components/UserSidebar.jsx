import { useState } from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {

    const [items, setItems] = useState(['products', 'orders']);
    const [selectedItem, setSelectedItem] = useState('products');

  return (
      <div className="list-group">
          {
              items.map((item, index) => {
                  return <Link key={index} to={`/dashboard/${item.toLowerCase()}`} className={`list-group-item list-group-item-action` + (selectedItem === item ? ' active' : '')}
                      onClick={() => setSelectedItem(item)}
                  > {item} </Link>
              })
        }
    </div>
  )
}

export default UserSidebar;