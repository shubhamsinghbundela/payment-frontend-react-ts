import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";

type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const navigate = useNavigate();

  const onSubmit = (data: SignupFormData) => {
    console.log(data);

    // TODO:
    // signupMutation.mutate(data)

    navigate({
      to: "/",
    });
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="first-name">First Name</FieldLabel>

              <Input
                id="first-name"
                type="text"
                placeholder="John"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />

              <FieldError errors={[errors.firstName]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="last-name">Last Name</FieldLabel>

              <Input
                id="last-name"
                type="text"
                placeholder="Doe"
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />

              <FieldError errors={[errors.lastName]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>

              <FieldError errors={[errors.email]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />

              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>

              <FieldError errors={[errors.password]} />
            </Field>

            <Field>
              <Button type="submit">Create Account</Button>

              <Button variant="outline" type="button">
                Sign up with Google
              </Button>

              <FieldDescription className="px-6 text-center">
                Already have an account? <Link to="/">Sign in</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
