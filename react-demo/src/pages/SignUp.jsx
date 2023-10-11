
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Link, redirect, useNavigate } from "react-router-dom";

export async function action({ request, params }) {
  return redirect(`/email-validation`);
}

const SignUp = () => {
  

  const navigate = useNavigate();

  const [existsUser, setExistsUser] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/email-validation/" + data.email, { replace: true });
  };

  return (
    <div className="mt-4">
     sign up
    </div>
  );
};

export default SignUp;
