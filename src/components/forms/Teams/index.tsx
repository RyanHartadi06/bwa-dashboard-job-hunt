"use client";
import FieldInput from "@/components/organisms/FieldInput";
import { Form } from "@/components/ui/form";
import { skillsFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DialogAddTeam from "./DialogAddTeam";

interface TeamsProps {}

const Teams: FC<TeamsProps> = () => {
  const form = useForm<z.infer<typeof skillsFormSchema>>({
    resolver: zodResolver(skillsFormSchema),
  });
  const onSubmit = (val: z.infer<typeof skillsFormSchema>) => {
    console.log(val);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FieldInput
            title="Basic Information"
            subtitle="Add team members of your company"
          >
            <div className="w-[65%] mb-5">
              <div className="flex flex-row justify-between items-center">
                <div className="text-lg font-semibold">2 Members</div>
                <DialogAddTeam />
              </div>
              <div className="grid grid-cols-3 gap-5 mt-6">
                {[0, 1, 2].map((item: number) => (
                  <div key={item} className="p-3 shadow text-center">
                    <div className="w-14 h-14 rounded-full bg-gray-300 mx-auto" />
                    <div className="mt-4 font-semibold">Ryan Hartadi</div>
                    <div className="text-sm text-gray-500">CEO</div>

                    <div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
                      <InstagramIcon className="w-4 h-4" />
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FieldInput>
        </form>
      </Form>
    </div>
  );
};

export default Teams;
