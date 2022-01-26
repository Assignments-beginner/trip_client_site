import React from "react";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./ManageAllBlogs.css";

const ManageAllBlogs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-headland-08303.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //Delete Orders
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this Product?"
    );
    if (proceed) {
      fetch(`https://shrouded-headland-08303.herokuapp.com/blogs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingProducts = products.filter(
              (orders) => orders._id !== id
            );
            console.log(remainingProducts);
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div className="pb-5">
      <h3 className="dashboard-sectionTitle text-center text-uppercase">
        Manage All <span className="text-danger">Blogs</span>
      </h3>
      <h5 className="dashboard-orderTitle text-center text-uppercase mt-3 mb-4">
        Total <strong className="text-danger">{products.length}</strong> Blogs
      </h5>
      <div>
        <Table bordered hover>
          <thead className="text-uppercase">
            <tr>
              <th className="table-text text-center p-3">Title</th>
              <th className="table-text status text-center p-3">Status</th>
              <th className="table-text text-center p-3">Approve / Cancel</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} product={product}>
                <td className="table-text text-center">
                  {product.productName}
                </td>
                <td className="table-text text-center">
                  <div className="text-center">
                    <Button
                      onClick={() => deleteHandler(product._id)}
                      variant="danger w-75"
                      size="sm"
                    >
                      <span className="table-text">Delete</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllBlogs;
