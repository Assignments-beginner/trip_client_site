import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Tips.css";

const Tips = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://shrouded-headland-08303.herokuapp.com/tips", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New tips added successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div className="mb-5 pb-3">
      <h3 className="dashboard-sectionTitle text-center text-dark mb-5 text-uppercase">
        add travel <span className="text-danger">tips</span>
      </h3>

      <Form
        className="d-flex flex-column newTips-form mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          className="mb-3 py-2 px-3"
          placeholder="Title"
          {...register("tipsTitle")}
        />
        <textarea
          style={{ outline: "none" }}
          // maxlength="150"
          className="mb-3 py-2 px-3"
          placeholder="Description"
          {...register("tipsDescription")}
        />

        <Button className="w-25" variant="danger" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default Tips;
