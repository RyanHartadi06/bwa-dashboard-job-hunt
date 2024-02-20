import React, { FC } from "react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { PartyPopperIcon } from "lucide-react";

interface JobDetailProps {}

const JobDetail: FC<JobDetailProps> = () => {
  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequatur mollitia vero, quos incidunt perferendis aliquam qui
                quas repudiandae eum! Corporis veniam esse beatae atque nisi
                earum necessitatibus fuga dolorem.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequatur mollitia vero, quos incidunt perferendis aliquam qui
                quas repudiandae eum! Corporis veniam esse beatae atque nisi
                earum necessitatibus fuga dolorem.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Who You Ares</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequatur mollitia vero, quos incidunt perferendis aliquam qui
                quas repudiandae eum! Corporis veniam esse beatae atque nisi
                earum necessitatibus fuga dolorem.
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequatur mollitia vero, quos incidunt perferendis aliquam qui
                quas repudiandae eum! Corporis veniam esse beatae atque nisi
                earum necessitatibus fuga dolorem.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-semibold">About This Role</div>
          <div className="shadow p-3 text-center my-6">
            1 <span className="text-gray-500">of 10 capacity</span>
            <Progress value={10} className="mt-3" />
          </div>
          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">12 Aug 2024</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">12 Aug 2024</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">$100 - $100000 USD</div>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Category</div>
            <div className="space-x-5">
              <Badge>Design</Badge>
            </div>
          </div>
          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Required Skills</div>
            <div className="space-x-5">
              {["UI/UX", "Figma", "Sketch", "Adobe XD"].map((skill, index) => (
                <Badge variant={"outline"} key={index}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />
        </div>
      </div>
      <Separator className="my-8" />
      <div className="text-3xl font-semibold">Perks & Benefits</div>
      <div className="text-gray-500">
        This job comes with several perks and benefits
      </div>
      <div className="grid grid-cols-4 gap-5 my-9">
        {[0, 1, 2].map((item: number) => (
          <div key={item}>
            <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

            <div className="text-lg font-semibold mb-3">Full Healthcare</div>
            <div className="text-gray-500">
              We believe in thriving communities and that starts with our team
              being happy and healthy.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetail;
