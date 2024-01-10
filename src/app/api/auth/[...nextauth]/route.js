import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


import bcrypt from "bcryptjs";
import db from "@/app/lib/db";
import User from "@/models/User";


const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        db.connect();

        const { email, password } = credentials;

        console.log(email,password)

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST }