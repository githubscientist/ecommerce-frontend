import { useState } from "react";
import productServices from "../services/productServices";

const CreateProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');

    const updateImage = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    const addProduct = (e) => {
        e.preventDefault();

        const product = {
            name,
            price,
            description,
            category,
            countInStock
        }

        // create a new product
        productServices.addProduct(product, image)
            .then(res => {
                alert('Product created successfully');
            })
            .catch(err => {
                alert('Failed to create product');
            })
    }

  return (
      <div>
          <h1>Create Product</h1>
          
          <form onSubmit={addProduct}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" 
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                  <input type="number" className="form-control" id="price" 
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="description" rows="3"
                      onChange={(e) => setDescription(e.target.value)}
                        value={description}
                  ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                  <input type="file" className="form-control" id="image" 
                        onChange={updateImage}
                    />
              </div>
              
              <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select className="form-select" id="category">
                        <option>Electronics</option>
                        <option>Books</option>
                        <option>Home</option>
                        <option>Food</option>
                  </select>
              </div>
              
              <div className="mb-3">
                  <label htmlFor="countInStock" className="form-label">Count In Stock</label>
                    <input type="number" className="form-control" id="countInStock" />
              </div>
                  

                <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    </div>
  )
}

export default CreateProduct;