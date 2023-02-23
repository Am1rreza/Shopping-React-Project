import "./signup.css";
import Input from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(3, "Name Length Cannot be Less than 3 Characters"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  number: Yup.string()
    .required("Phone Number is Required")
    .matches(/^\d+$/, "You Can Only use Numbers")
    .matches(/^[0-9]{11}/, "Invalid Phone Number"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters,\n1 Uppercase, 1 Lowercase and 1 Number"
    ),
  passwordConfirm: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />

        <Input formik={formik} name="email" label="Email" />

        <Input formik={formik} name="number" label="Phone Number" type="tel" />

        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />

        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password Confirmation"
          type="password"
        />

        <div className="btnBox">
          <button
            className="btn primaryBtn"
            type="submit"
            disabled={!formik.isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
