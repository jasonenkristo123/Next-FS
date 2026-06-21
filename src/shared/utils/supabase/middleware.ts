import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export function createClient(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request });

    const supabaseServer = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => {
                        request.cookies.set(name, value)
                    })
                    supabaseResponse = NextResponse.next({ request })
                    cookiesToSet.forEach(({ name, value, options }) => {
                        supabaseResponse.cookies.set(name, value, options)
                    })
                }
            }
        }
    )
    
    return {
        supabaseServer,
        supabaseResponse
    }
}