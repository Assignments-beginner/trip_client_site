import React from "react";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./ManageAllBlogs.css";

const ManageAllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [status, setStatus] = useState("Approved");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("https://shrouded-headland-08303.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, [reload]);

  //Approve Blog
  const handleUpdate = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to approve this blog?"
    );
    if (proceed) {
      setStatus(status);
      fetch(
        `https://shrouded-headland-08303.herokuapp.com/updateStatus/${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ status }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.matchedCount) {
            setReload(!reload);
          }
        });
    }
  };

  //Delete Blogs
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this blog?"
    );
    if (proceed) {
      fetch(`https://shrouded-headland-08303.herokuapp.com/blogs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingBlogs = allBlogs.filter((blogs) => blogs._id !== id);
            console.log(remainingBlogs);
            setAllBlogs(remainingBlogs);
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
        Total <strong className="text-danger">{allBlogs.length}</strong> Blogs
      </h5>
      <div>
        <Table bordered hover>
          <thead className="text-uppercase">
            <tr>
              <th className="table-text text-center p-3">Blog ID</th>
              <th className="table-text status text-center p-3">Status</th>
              <th className="table-text text-center p-3">Approve / Cancel</th>
            </tr>
          </thead>
          <tbody>
            {allBlogs.map((blog) => (
              <tr key={blog._id} blog={blog}>
                <td className="table-text text-center">{blog._id.slice(0,7)}</td>
                <td className="table-text text-center">{blog.blogStatus}</td>

                <td className="table-text text-center">
                  <div className="cancel">
                    <Button
                      className="approve-btn"
                      onClick={() => handleUpdate(blog._id)}
                      variant="outline-success w-100 me-2"
                      size="sm"
                    >
                      <span className="table-text">Approve</span>
                    </Button>
                    <Button
                      className="table-text"
                      onClick={() => deleteHandler(blog._id)}
                      variant="danger w-100"
                      size="sm"
                    >
                      <span className="table-text">Cancel</span>
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
