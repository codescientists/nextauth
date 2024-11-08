import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import NextAuth, { CredentialsSignin } from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
        name: "Credentials",
        credentials: {
            email: {
                label: "Email",
                type: "email",
            },
            password: {
                label: "Password",
                type: "password",
            }
        },
        authorize: async (credentials) => {
            console.log("CREDENTIALS", credentials)

            const email = credentials.email as string | undefined;
            const password = credentials.password as string | undefined;
            
            if (!email || !password){
                throw new CredentialsSignin("Please provide both email and password");
            }
            
            if (typeof credentials.email !== "string"){
                throw new CredentialsSignin("Email is not valid");
            }
            
            const user = { name: "Piyush" }

            return user;
        }
    })
  ],
})