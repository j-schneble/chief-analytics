import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // login logic
        // find user from db
        if (email !== "admin@getchief" || password !== "1234") {
          throw new Error("invalid credentials");
        }

        // if everything is correct
        return {
          id: "1234",
          name: "chief user",
          email: "admin@getchief",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
   
  },
};

export default NextAuth(authOptions);