"use client";

import TitleForm from "@/components/organisms/atoms/TitleForm";
import { Separator } from "@/components/ui/separator";
import { skillsFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FieldInput from "@/components/organisms/FieldInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface SocialLinkProps {}

const SocialLink: FC<SocialLinkProps> = () => {
  const form = useForm<z.infer<typeof skillsFormSchema>>({
    resolver: zodResolver(skillsFormSchema),
  });
  const onSubmit = (val: z.infer<typeof skillsFormSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subtitle="This is company information that you can update anytime"
        />
      </div>
      <Separator className="mb-7" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FieldInput
            title="Basic Information"
            subtitle="Add elsewhere links to your company profile. You can add only username without full https links."
          >
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Facebook"
                        {...field}
                        className="w-[450px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Instagram"
                        {...field}
                        className="w-[450px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Linkedin"
                        {...field}
                        className="w-[450px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Twitter"
                        {...field}
                        className="w-[450px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="youtube"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Youtube</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Youtube"
                        {...field}
                        className="w-[450px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>
          <Separator />
          <div className="justify-end flex">
            <Button>Save Changes</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SocialLink;
