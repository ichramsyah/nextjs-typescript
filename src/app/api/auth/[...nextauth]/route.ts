import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/login', // Arahkan ke halaman custom-mu di `app/login/page.tsx`
    // signOut: '/auth/signout',
    // error: '/auth/error',
  },
});

export { handler as GET, handler as POST };
