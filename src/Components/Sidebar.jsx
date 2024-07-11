import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const [items, setItems] = useState(['products', 'orders', 'customers']);
    const [selectedItem, setSelectedItem] = useState('products');

  return (
      <div className="list-group">
          {
              items.map((item, index) => {
                  return <Link key={index} to={`/admin/${item.toLowerCase()}`} className={`list-group-item list-group-item-action` + (selectedItem === item ? ' active' : '')}
                      onClick={() => setSelectedItem(item)}
                  > {item} </Link>
              })
        }
    </div>
  )
}

export default Sidebar;