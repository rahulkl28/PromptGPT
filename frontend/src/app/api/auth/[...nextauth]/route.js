
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
];

export const callbacks = {
  async session({ session }) {
    // Fetch user details from your Django API and attach to the session
    const userResponse = await fetch('http://127.0.0.1:8000/api', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    const user = await userResponse.json();
    session.user = user;

    return session;
  },
};

export default NextAuth({ providers, callbacks });