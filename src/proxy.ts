import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./shared/utils/supabase/middleware";


export async function proxy(request: NextRequest) {
    const { supabaseServer, supabaseResponse } = createClient(request);
    const { pathname } = request.nextUrl;

    const { data: { user } } = await supabaseServer.auth.getUser();

    const isAdminRoute = pathname.startsWith('/admin');
    const isProtectedRoute = pathname.startsWith('/events');
    const isAuthRoute = pathname === 'login' || pathname === 'register'

    if (!user && (isAdminRoute || isProtectedRoute)) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    if (user && isAuthRoute) {
        return NextResponse.redirect(new URL("/events", request.url))
    }

    if (user && isAdminRoute) {
        const { data: profile } = await supabaseServer.from('profiles').select('role').eq('id', user.id).single();
        if (profile?.role === 'admin') {
            return NextResponse.redirect(new URL('/admin', request.url))
        } else {
            return NextResponse.redirect(new URL('/events', request.url))
        }
    }

    return supabaseResponse;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|api/auth).*)',
    ],
}