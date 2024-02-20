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
import { JOB_APPLICANTS_COLUMNS, JOB_APPLICANTS_DATA } from "@/constants";
import ButtonCustom from "../Button";
interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANTS_COLUMNS.map((column, index) => (
              <TableHead key={index}>{column}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_APPLICANTS_DATA.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.name}</TableCell>
              <TableCell>{job.appliedDate}</TableCell>
              <TableCell>
                <ButtonCustom url={`/job-detail/1`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicants;
