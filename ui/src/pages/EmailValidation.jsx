import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
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
    <Button
      size="sm"
      color={hadSent ? "gray" : "blue-gray"}
      disabled={hadSent}
      className="rounded"
      onClick={(e) => doResendConfirmationCode(e, email)}
    >
      Resend
    </Button>
  );
}

const EmailValidation = () => {

  const email = useLoaderData().params.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(data.email);
  };

  return (
    <div className="flex flex-row justify-center mt-100">
      <Card color="transparent" shadow={false}>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your confirmation code
        </Typography>
        <Form
          method="post"
          action="/email-validation"
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-4">
            <input
              type="hidden"
              value={email}
              name="email"
              {...register("email")}
            />
            <div className="flex flex-row gap-1">
            <Input
              size="lg"
              label="Code"
              {...register("code", {
                required: "Code is required",
              })}
            />
            <ResendConfirmationCode email={email} />
            </div>
            {errors.code && (
              <p className="text-red-500 text-sm">{errors.code.message}</p>
            )}
            <Button className="mt-4 " fullWidth type="submit">
              Confirm
            </Button>
          </div>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/sign-in">
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
            </Link>
          </Typography>
          
        </Form>
      </Card>
    </div>
  );
};

export default EmailValidation;
