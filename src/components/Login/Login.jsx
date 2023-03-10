import "./login.css";
import Input from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const LoginForm = ({ history }) => {
  const onSubmit = (values) => {
    toast.success("Login Successfully");
    history.push("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="loginContainer">
        <Input formik={formik} name="email" label="Email" />

        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />

        <div className="btnBox">
          <button
            className="btn primaryBtn"
            type="submit"
            disabled={!formik.isValid}
          >
            Login
          </button>
          <Link to={"/signup"}>
            <p>Not Signup yet?</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
