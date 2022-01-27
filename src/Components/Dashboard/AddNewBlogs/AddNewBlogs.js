import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddNewBlogs.css";

const AddNewBlogs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://shrouded-headland-08303.herokuapp.com/blogs", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title:
              "New blog added successfully! Admin will post this blog later.",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div className="mb-5 pb-3">
      <h3 className="dashboard-sectionTitle text-center text-dark mb-5 text-uppercase">
        add new <span className="text-danger">blogs</span>
      </h3>

      <Form
        className="d-flex flex-column newProducts-form mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Your Name"
          {...register("blogPeople")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Your Image URL"
          {...register("blogPeopleImg")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Blog Title"
          {...register("blogTitle")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Blog Image URL"
          {...register("blogImg")}
        />

        <textarea
          style={{ outline: "none" }}
          // maxlength="150"
          className="mb-3 py-2 px-3"
          placeholder="Description"
          {...register("blogDescription")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="$ Cost"
          {...register("blogCost")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3 w-50"
          type="number"
          min="1"
          max="5"
          placeholder="* Rating"
          {...register("blogRating")}
        />

        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3 d-none"
          defaultValue="Pending"
          placeholder="Status"
          {...register("blogStatus")}
        />
        <Button className="w-25" variant="danger" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default AddNewBlogs;
