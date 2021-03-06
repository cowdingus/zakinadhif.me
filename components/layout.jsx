import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div className="font-roboto-mono bg-[#161A26] text-whitesmoke">
            <div className="flex flex-col max-w-2xl w-full mx-auto min-h-screen">
                <Navbar />
                <div className="grow">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}