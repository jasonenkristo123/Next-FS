import z from "zod"

export const LoginSchema = z.object({
    email: z.email({ message: "Please enter a valid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

export type TLoginSchema = z.infer<typeof LoginSchema>
