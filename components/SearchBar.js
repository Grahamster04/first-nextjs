import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [products, setProducts] = useState([]); // Empty array (Title, Image, Price)
  const [searchTerm, setSearchTerm] = useState(''); // Empty string (Title)
  const [filteredProducts, setFilteredProducts] = useState([]); // Empty array (Title, Image, Price)

  useEffect(() => {
    // Fetch products from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => { setProducts(data); setFilteredProducts(data); }) // Initialize filtered products with all products 
  }, []);

  useEffect(() => {
    // Filter products based on search term
    setFilteredProducts(
      products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
        <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearch}
        />
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                </tr>
            </thead>
        <tbody>
            {filteredProducts.slice(0, 20).map((product) => (
                <tr key={product.id}>
                    <td>{product.title}</td> 
                    <td>
                    <img src={product.image} alt={product.title} width="50" />
                    </td>
                    <td>${product.price.toFixed(2)}</td>
                </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
};

export default SearchBar;