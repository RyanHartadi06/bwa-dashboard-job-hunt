"use client";
import { jobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import FieldInput from "@/components/organism/FieldInput";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CATEGORIES, JOBTYPES } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputSkills from "@/components/organism/InputSkills";
import CKEditor from "@/components/organism/CKEditor";

interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = () => {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };

  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />{" "}
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your top perks and benefits
        </div>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="c.g. Software Engineer"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription>at least 80 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <Separator />
          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          className="flex items-center space-x-3 space-y-0"
                          key={i + item}
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <Separator />
          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary range for the role."
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="$100" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="$1000"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>
          <Separator />
          <FieldInput
            title="Categories"
            subtitle="You can select job categories"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Job Categories" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CATEGORIES.map((item: string, i: number) => (
                        <SelectItem value={item} key={i + item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <Separator />
          <FieldInput
            title="Required Skills"
            subtitle="Add required skills for the job"
          >
            <InputSkills form={form} />
          </FieldInput>
          <Separator />
          <FieldInput
            title="Job Descriptions"
            subtitle="Job titles must be describe one position"
          >
            <InputSkills form={form} />
          </FieldInput>
          <Separator />
          <FieldInput
            title="Job Descriptions"
            subtitle="Job titles must be describe one position"
          >
            <CKEditor
              form={form}
              name="jobDescription"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <Separator />
          <FieldInput
            title="Who You Are"
            subtitle="Add your preferred candidates qualifications"
          >
            <CKEditor
              form={form}
              name="whoYouAre"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <Separator />
          <FieldInput
            title="Nice-To-Haves"
            subtitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
          >
            <CKEditor
              form={form}
              name="niceToHave"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <Separator />
        </form>
      </Form>
    </div>
  );
};

export default PostJobPage;
