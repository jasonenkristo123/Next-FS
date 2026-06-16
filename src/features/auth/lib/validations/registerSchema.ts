import { z } from "zod";


export const registerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
