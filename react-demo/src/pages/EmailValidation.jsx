
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Link,
  useLoaderData,
} from "react-router-dom";

export async function loader({ params }) {
  const email = params.email;
  return { params };
}

function ResendConfirmationCode({ email }) {
  const [hadSent, setHadSent] = React.useState();
  const onChange = ({ target }) => setHadSent(target.value);

  function doResendConfirmationCode(e, email) {
    e.preventDefault();
  
    alert(email);
    
  }
  return (
    <div>resent</div>
  );
}

const EmailValidation = () => {

  return (<div>email validation</div>);
};

export default EmailValidation;
