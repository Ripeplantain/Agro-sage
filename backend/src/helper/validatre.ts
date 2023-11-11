import { z } from "zod";


export const userData = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(100),
    address: z.string().min(2).max(100),
    phoneNumber: z.string().min(2).max(100),
})