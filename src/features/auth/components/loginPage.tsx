"use client"
import { useForm } from "react-hook-form";
import { LoginSchema, TLoginSchema } from "../lib/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/lib/utils";
import { loginWithGithub, loginWithGoogle, loginWithPassword } from "@/shared/utils/auth";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting } } = useForm<TLoginSchema>({
            resolver: zodResolver(LoginSchema),
            defaultValues: {
                email: "",
                password: ""
            }
        });
        const router = useRouter();

        const submitWithPassword = async (data: TLoginSchema) => {
            try {
                await loginWithPassword(data.email, data.password);
                router.push("/events");
            } catch {
                console.log("Login failed");
            }
        }

        const submitWithGoogle = async () => {
            await loginWithGoogle();
        }

        const submitWithGithub = async () => {
            await loginWithGithub();
        }


    return (
        <div className="w-full h-dvh flex items-center justify-center">
            <form onSubmit={handleSubmit(submitWithPassword)} className="container mx-10 sm:mx-0 bg-slate-900 max-w-125 py-6 w-full rounded-sm">
                <h1 className="text-white font-inter-700 text-center text-xl md:text-2xl ">
                    Sign Up
                </h1>

                <div className="mt-4 px-10">
                    <label htmlFor="email" className="text-white block">
                        Email
                    </label>
                    <input type="text" {...register("email")} placeholder="asepsumianto@gmail.com" className="bg-white/10 rounded-sm w-full placeholder:text-white/50 px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400 text-white" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mt-4 px-10">
                    <label htmlFor="name" className="text-white block">
                        Password
                    </label>
                    <input type="password" {...register("password")} placeholder="*******" className="bg-white/10 rounded-sm w-full placeholder:text-white/50 px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400 text-white" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <div className="mt-4 px-10">
                    <Button onClick={submitWithGoogle} variant="outline" size="xl" className={cn("w-full bg-white/30 text-black font-inter-700 border-none cursor-pointer")}>
                        Google
                    </Button>
                </div>

                <div className="mt-4 px-10">
                    <Button onClick={submitWithGithub} variant="outline" size="xl" className={cn("w-full bg-white/30 text-black font-inter-700 border-none cursor-pointer")}>
                        Github
                    </Button>
                </div>

                <div className="mx-10 mt-4">
                    <Button type="submit" variant="default" size="xl" disabled={isSubmitting} className={cn("w-full bg-white text-black font-inter-700 hover:bg-white/70 cursor-pointer")}>
                        {isSubmitting ? "Loading..." : "Sign In"}
                    </Button>
                </div>
            </form>
        </div>
    )
}