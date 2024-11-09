import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Request.css";
// import axios from "axios";

function RequestProductForm() {
  let form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      spec: "",
      material: "",
      description: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email("Invalid email address").required(),
      phone: Yup.string().required(),
      spec: Yup.string().required(),
      material: Yup.string().required(),
      description: Yup.string().required().max(300),
    }),

    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);

      // const response = await axios
      //   .post("http://localhost:3000/requests", values)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  });

  console.log(form.values);
  console.log(form.errors);

  return (
    <Form onSubmit={form.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label
          className={`${form.touched.name && form.errors.name === "name is a required field" ? "invalid-color" : ""}`}
        >
          {form.touched.name && form.errors.name === "name is a required field"
            ? "Required"
            : "Name"}{" "}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={form.values.name}
          onChange={form.handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" value={form.values.email}>
        <Form.Label
          className={`${form.touched.email && form.errors.email === "email is a required field" ? "invalid-color" : ""}`}
        >
          {(form.touched.email && form.errors.email) ===
          "email is a required field"
            ? "Required"
            : "Email"}
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={form.values.email}
          onChange={form.handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label
          className={`${(form.touched.phone && form.errors.phone) === "phone is a required field" ? "invalid-color" : ""}`}
        >
          {" "}
          {(form.touched.phone && form.errors.phone) ===
          "phone is a required field"
            ? "Required"
            : "Phone"}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          name="phone"
          value={form.values.phone}
          onChange={form.handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Technical Specification</Form.Label>
        <Form.Select
          name="spec"
          value={form.values.spec}
          onChange={form.handleChange}
        >
          <option>Select Speaker Spec</option>
          <option value="1">X</option>
          <option value="2">Y</option>
          <option value="3">Z</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Material Specification</Form.Label>
        <Form.Select
          name="material"
          value={form.values.material}
          onChange={form.handleChange}
        >
          <option>Select Speaker Material</option>
          <option value="1">X</option>
          <option value="2">Y</option>
          <option value="3">Z</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={`${form.touched.description && form.errors.description === "description is a required field" ? "invalid-color" : ""}`}>{(form.touched.description && form.errors.description) ===
          "description is a required field"
            ? "Required"
            : "Description"}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={form.values.description}
          onChange={form.handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="rounded-5 px-5 mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default RequestProductForm;
