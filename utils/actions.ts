"use server"

import { CredentialsSignin } from "next-auth";
import { signIn } from "next-auth/react";
import { AnyNode } from "postcss";

export const loginUser = async (values: any) => {

    try {
    console.log("SIGNING IN")

    await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: true,
        redirectTo: '/'
    })

    } catch (error) {
    const someError = error as CredentialsSignin;
    return someError.cause;
    }  
}