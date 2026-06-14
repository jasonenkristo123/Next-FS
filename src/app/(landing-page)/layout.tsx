import Navbar from "@/shared/components/ui/navbar";


export default function LandingPageLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex-1 flex flex-col ">
            <Navbar />
            {children}
        </div>
    )
}