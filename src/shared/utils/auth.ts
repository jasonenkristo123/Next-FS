import { supabase } from "../lib/supabase";

export async function loginWithPassword(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) throw error;
    return data;
}

export async function registerWithPassword(name: string, email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name
            }
        }
    })

    if (error) throw error;
    return data;
}


export async function loginWithGoogle() {
    return await supabase.auth.signInWithOAuth({
        provider: "google"
    })
}

export async function loginWithGithub() {
    return await supabase.auth.signInWithOAuth({
        provider: "github"
    })
}

export async function logout() {
    return await supabase.auth.signOut()
}
