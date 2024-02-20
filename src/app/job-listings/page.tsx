import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTIBG_COLUMNS, JOB_LISTINGS_DATA } from "@/constants";
import { Badge } from "@/components/ui/badge";
import ButtonCustom from "@/components/organisms/Button";

interface JobListingsProps {}

const JobListings: FC<JobListingsProps> = () => {
  return (
    <div className="">
      <div className="font-semibold text-3xl">Job Listings</div>
      <div className="mt-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTIBG_COLUMNS.map((column, index) => (
                <TableHead key={index}>{column}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_LISTINGS_DATA.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{job.role}</TableCell>
                <TableCell>
                  <Badge>{job.status}</Badge>
                </TableCell>
                <TableCell>{job.datePosted}</TableCell>
                <TableCell>{job.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{job.jobType}</Badge>
                </TableCell>
                <TableCell>{job.applicants}</TableCell>
                <TableCell>
                  {job.applicants}/{job.needs}
                </TableCell>
                <TableCell>
                  <ButtonCustom url={`/job-detail/1`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobListings;
