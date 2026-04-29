import { betterAuth } from "better-auth";
import { prisma } from "./prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: { 
        enabled: true, 
        requireEmailVerification: false
    }, 
    socialProviders:{
        twitch: {
            //enabled: true,
            clientId: process.env.TWITCH_CLIENT_ID! as string,
            clientSecret: process.env.TWITCH_CLIENT_SECRET! as string
        }
    }
})