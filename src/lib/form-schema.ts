import { JOBTYPES } from '@/constants';
import {z} from 'zod';

export const jobFormSchema = z.object({
  roles : z.string({required_error : 'Job title is required'}).min(3, {message : 'Job title must be at least 3 characters long'}),
  jobType : z.enum(JOBTYPES, {required_error : 'Job type is required'}),
  salaryFrom : z.string({required_error : 'Salary from is required'}),
  salaryTo : z.string({required_error : 'Salary to is required'}),
  categoryId: z.string({required_error : 'Category is required'}),
  requiredSkills: z.string().array().nonempty({message : 'At least one skill is required'}),
  jobDescription: z.string({required_error : 'Job description is required'}).min(10, {message : 'Job description must be at least 10 characters long'}),
  responsibility: z.string({required_error : 'Responsibilities are required'}).min(10, {message : 'Responsibilities must be at least 10 characters long'}),
  whoYouAre: z.string({required_error : 'Who you are is required'}).min(10, {message : 'Who you are must be at least 10 characters long'}),
  niceToHaves: z.string({required_error : 'Nice to have is required'}).min(10, {message : 'Nice to have must be at least 10 characters long'}),
  benefits: z.object({
    benefit: z.string(),
    description: z.string()
  }).array().nonempty({message : 'At least one benefit is required'}),
});