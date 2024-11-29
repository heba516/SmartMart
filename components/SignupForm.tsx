"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Button,
} from "./ui";
import clsx from "clsx";

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password !== data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

interface IInput {
  name: "firstName" | "lastName" | "email" | "password" | "confirmPassword";
  label: string;
  placeholder: string;
}

const groupedInputs: IInput[] = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "Enter your first name",
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "Enter your last name",
  },
];
const inputs: IInput[] = [
  {
    name: "email",
    label: "Email address",
    placeholder: "Enter your email address",
  },
  {
    name: "password",
    label: "Passwordme",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    placeholder: "Enter your password again",
  },
];

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex items-center justify-between gap-3">
          {groupedInputs.map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-semibold text-base">
                    {input.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      //   className={clsx(
                      //     form.formState.errors[input.name] && "shadow-error"
                      //   )}
                      placeholder={input.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        {inputs.map((input, index) => (
          <FormField
            key={index}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-base">
                  {input.label}
                </FormLabel>
                <FormControl>
                  <Input
                    className={clsx(
                      form.formState.errors[input.name] && "shadow-error"
                    )}
                    placeholder={input.placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          variant={"default"}
          className="w-full p-[10px] text-xl leading-4 font-semibold rounded-lg bg-primaryRed"
          type="submit"
        >
          Create account
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
