import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewService.css";

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://shrouded-headland-08303.herokuapp.com/services", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          // alert("Service Addeded Successfully!");
          reset();
          setSuccess("Service Added Successfully!");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };
  return (
    <div className="pt-5 banner-add">
      <h3 className="text-center text-white mb-5 text-uppercase">
        add a new <span style={{ color: "#ea3c23" }}>trip</span> package
      </h3>

      <Form
        className="d-flex flex-column w-25 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Destination"
          {...register("serviceName")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Image URL"
          {...register("serviceImg")}
        />

        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="About"
          {...register("serviceAbout")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="$ Cost"
          {...register("serviceCost")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="00:00 Time Validation"
          {...register("serviceTime")}
        />
        <Button className="w-25" variant="danger" type="submit">
          ADD
        </Button>
      </Form>
      <p className="text-center text-white text-uppercase mt-4 fs-4">
        {success}
      </p>
    </div>
  );
};

export default AddNewService;
