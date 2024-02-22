"use client";
import { signInSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface SignInPageProps {}

const SignInPage: FC<SignInPageProps> = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (val: z.infer<typeof signInSchema>) => {
    console.log(val);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border border-border p-10">
          <div className="font-semibold text-center text-2xl mb-2">
            Login your account
          </div>
          <div className="text-sm text-gray-500">
            Enter your email to access dashboard
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full">Sign In</Button>

              <div className="text-sm">
                Don`t have an account{" "}
                <Link href="/sign-up" className="text-primary">
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
