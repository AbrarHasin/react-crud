import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Use 'react-router-dom' instead of 'react-router'
import Wrapper from './Wrapper';
import { Product } from '../interfaces/product';

const ProductsEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Use the useParams hook from 'react-router-dom'
  const navigate = useNavigate(); // Use the useNavigate hook from 'react-router-dom'
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/api/products/${id}`);
      const product: Product = await response.json();
      setTitle(product.title);
      setImage(product.image);
    })();
  }, [id]);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:8000/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        image
      })
    });

    navigate('/admin/products', { replace: true });
  };

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsEdit;