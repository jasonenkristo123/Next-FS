import Link from "next/link";
import { Button } from "./button";


export default function Navbar() {
    return (
        <nav className="flex items-center relative top-0 left-0 w-full">
            {/* large */}
            <div className="hidden md:flex px-8 py-4 items-center justify-between w-full">
                <div className="flex items-center gap-6">
                    <h1 className="font-inter-700 text-primaryblue md:text-2xl lg:text-3xl xl:text-4xl">
                        EventHub
                    </h1>
                    <Link href="/home">
                        <p className="font-inter-600 text-primaryblue md:text-lg xl:text-xl">
                            Home
                        </p>
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/login">
                        <h2 className="text-secondaryblue md:text-sm xl:text-lg">
                            Sign In
                        </h2>
                    </Link>
                    <Link href="/register">
                        <Button variant="default" size="lg" className="bg-primaryblue cursor-pointer">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="md:hidden flex items-center px-8 py-4 justify-between w-full">
                <h1 className="font-inter-700 text-primaryblue text-2xl">
                    EventHub
                </h1>
                <div className="flex items-center gap-6">
                    <Link href="/login">
                        <h2 className="text-secondaryblue md:text-sm xl:text-lg">
                            Sign In
                        </h2>
                    </Link>
                    <Link href="/register">
                        <Button variant="default" size="lg" className="bg-primaryblue">
                            Get Started
                        </Button>
                    </Link>
                </div>

            </div>

        </nav>
    )
}