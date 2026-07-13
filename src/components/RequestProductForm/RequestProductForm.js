import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Request.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function RequestProductForm() {
  const [show, setShow] = useState(false);

  const submition = useRef();

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter your email"),
      phone: Yup.string().required("Please enter your phone number"),
      description: Yup.string()
        .required("Please describe your dream speaker")
        .max(300, "Please keep it under 300 characters"),
    }),

    onSubmit: async () => {
      emailjs
        .sendForm(
          "service_xedvn6r",
          "template_ib5kavn",
          submition.current,
          "lefNpA0eeHK4rVGKZ",
        )
        .then(() => {
          setShow(true);
        });
    },
  });

  const invalid = (field) => form.touched[field] && !!form.errors[field];

  return (
    <Form onSubmit={form.handleSubmit} ref={submition} noValidate>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={form.values.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          isInvalid={invalid("name")}
          id="name"
        />
        <Form.Control.Feedback type="invalid">
          {form.errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          isInvalid={invalid("email")}
          id="email"
        />
        <Form.Control.Feedback type="invalid">
          {form.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          name="phone"
          value={form.values.phone}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          isInvalid={invalid("phone")}
          id="phone"
        />
        <Form.Control.Feedback type="invalid">
          {form.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Tell us about your dream speaker — size, materials, features…"
          name="description"
          value={form.values.description}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          isInvalid={invalid("description")}
          id="description"
        />
        <Form.Control.Feedback type="invalid">
          {form.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        id="send"
        className="btn-rounded px-5 py-2 mt-3"
      >
        Submit request
      </Button>
      {show && (
        <div className="alert alert-success mt-4 rounded-4" role="alert">
          <h5 className="alert-heading fw-bold">Request sent</h5>
          <p className="mb-0">
            Thank you — we'll get back to you about your custom speaker soon.
          </p>
        </div>
      )}
    </Form>
  );
}

export default RequestProductForm;
