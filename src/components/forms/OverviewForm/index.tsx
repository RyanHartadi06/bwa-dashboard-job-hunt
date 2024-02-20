"use client";

import CustomUpload from "@/components/helpers/CustomUpload";
import CKEditor from "@/components/organisms/CKEditor";
import FieldInput from "@/components/organisms/FieldInput";
import TitleForm from "@/components/organisms/atoms/TitleForm";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { EMPLOYEE, INDUSTRY, LOCATION, optionType } from "@/constants";
import { overviewFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import InputSkills from "@/components/organisms/InputSkills";

interface OverviewFormProps {}

const OverviewForm: FC<OverviewFormProps> = () => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
  });

  const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {
    console.log(val);
  };
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <div className="my-5">
        <TitleForm
          title="Overview"
          subtitle="Write a brief overview of your company."
        />
      </div>

      <Separator className="mb-7" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FieldInput
            title="Comapany Logo"
            subtitle="This image will be shown publicly as company logo."
          >
            <CustomUpload form={form} name="image" />
          </FieldInput>
          <Separator className="mb-7" />
          <FieldInput
            title="Company Details"
            subtitle="Introduce your company core info quickly to users by fill up company details"
          >
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company Name"
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
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Website"
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
                name="location"
                render={({ field }) => (
                  <FormItem className="w-[450px]">
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LOCATION.map((item: optionType, i: number) => (
                          <SelectItem value={item.id} key={i}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-[450px] flex flex-row justify-between items-center">
                <FormField
                  control={form.control}
                  name="employee"
                  render={({ field }) => (
                    <FormItem className="w-[220px]">
                      <FormLabel>Employee</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Employee" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EMPLOYEE.map((item: optionType, i: number) => (
                            <SelectItem value={item.id} key={i}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem className="w-[220px]">
                      <FormLabel>Industry</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {INDUSTRY.map((item: optionType, i: number) => (
                            <SelectItem value={item.id} key={i}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateFounded"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date Founded</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[450px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <InputSkills
                form={form}
                name="techStack"
                label="Add Tech Stack"
              />
            </div>
          </FieldInput>
          <Separator />
          <FieldInput
            title="About Company"
            subtitle="Brief description for your company. URLs are hyperlinked."
          >
            <CKEditor
              form={form}
              name="description"
              editorLoaded={editorLoaded}
            />
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

export default OverviewForm;
