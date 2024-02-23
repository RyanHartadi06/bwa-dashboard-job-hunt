import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { hashPassword } from "@/lib/utils";


export async function POST(request: Request){
  const data = await request.json();

  //check if email already exists
  const existingUser = await prisma.company.findUnique({
    where : {
      email : data.email
    }
  });

  if(existingUser){
    return NextResponse.json({
      status : "error",
      message : "Email already exists"
    });
  }

  const password = await hashPassword(data.password);

  const result = await prisma.company.create({
    data : {
      name : data.name,
      email : data.email,
      password : password,
    }

  });
  return NextResponse.json({
    status : "success",
    message : "Account created successfully"
  });
}