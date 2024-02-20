import { EnumValues } from "zod";

export type optionType = {
  id: string;
  label: string;
}

export const JOBTYPES: EnumValues = ['Full-Time', 'Part-Time', 'Remote', 'Internship'];

export const LOCATION: optionType[] = [
  {
    id: 'Indonesia', 
    label: 'Indonesia'
  },
  {
    id: 'Singapore', 
    label: 'Singapore'
  },
  {
    id: 'Malaysia', 
    label: 'Malaysia'
  },
  {
    id: 'Thailand', 
    label: 'Thailand'
  },
  {
    id: 'Vietnam', 
    label: 'Vietnam'
  },
  {
    id: 'Philippines', 
    label: 'Philippines'
  },
  {
    id: 'Myanmar', 
    label: 'Myanmar'
  },
  {
    id: 'Laos', 
    label: 'Laos'
  },
  {
    id: 'Cambodia', 
    label: 'Cambodia'
  },
  {
    id: 'Brunei', 
    label: 'Brunei'
  },
  {
    id: 'Timor-Leste', 
    label: 'Timor-Leste'
  }
];

export const EMPLOYEE: optionType[] = [
  {
    id : '1-50',
    label: '1-50'
  },
  {
    id : '51-100',
    label: '51-100'
  },
  {
    id : '101-150',
    label: '101-150'
  },
  {
    id : '151-200',
    label: '151-200'
  },
];

export const INDUSTRY: optionType[] = [
  {
    id: 'Advertising',
    label: 'Advertising'
  },
  {
    id: 'Business',
    label: 'Business'
  },
  {
    id: 'Blockchain',
    label: 'Blockchain'
  },
  {
    id: 'Cloud',
    label: 'Cloud'
  },
  {
    id: 'Education',
    label: 'Education'
  },
  {
    id: 'Fintech',
    label: 'Fintech'
  },
  {
    id: 'Gaming',
    label: 'Gaming'
  },
  {
    id: 'Food & Beverage',
    label: 'Food & Beverage'
  },
  {
    id: 'Healthcare',
    label: 'Healthcare'
  },
  {
    id: 'Hosting',
    label: 'Hosting'
  },
  {
    id: 'Media',
    label: 'Media'
  },
];

export const CATEGORIES: EnumValues = ['Software Development', 'Design', 'Marketing', 'Sales', 'Customer Support', 'Finance', 'Human Resources', 'Product', 'Other'];

export const JOB_LISTIBG_COLUMNS: string[] = ['Roles' ,'Status', 'Date Posted', 'Due Date', 'Job Type', 'Applicants', 'Needs'];

export const JOB_LISTINGS_DATA = [
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  },
  {
    role: 'Senior Frontend Developer',
    status: 'Open',
    datePosted: '1d ago',
    dueDate: '2w ago',
    jobType: 'Full-Time',
    applicants: '10',
    needs: '2'
  }
];

export const JOB_APPLICANTS_COLUMNS: string[] = ['Name' , 'Applied Date'];

export const JOB_APPLICANTS_DATA = [
  {
    'name' : 'John Doe',
    'appliedDate' : '1d ago'
  }
]