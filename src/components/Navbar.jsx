import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const location = useLocation();
    const [searchVisible, setSearchVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [logoUrl, setLogoUrl] = useState("/images/logo.png");
    const [siteName, setsiteName] = useState("BlogMaze")
    const { isAuthenticated } = useAuth();

    // Close menu when navigating to a new route
    useEffect(() => {
        setMenuOpen(false);

        const fetchLogo = async () => {
            try {
                const RESPONSE = await axios.get(import.meta.env.VITE_LOGO_URL);
                const LOGOPATH = RESPONSE.data.data[0]?.Logo?.url; // Ensure correct field name
                const SITENAME = RESPONSE.data.data[0]?.SiteName;

                if (LOGOPATH) {
                    setLogoUrl(LOGOPATH);
                }

                if (SITENAME) {
                    setsiteName(SITENAME)
                }
           } catch (error) {
                console.log("Error fetching logo:", error);
            }
        };

        fetchLogo();
    }, [location.pathname, setLogoUrl, setsiteName]); // ✅ Correct dependencies


    return (
        <div className="sticky top-0 z-10">
            <div className="bg-[#191919] p-4">
                <div className="flex items-center justify-between lg:justify-around">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            {logoUrl && <img src={logoUrl} alt="Logo" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />}
                        </div>
                        {siteName && <h1 className="text-xl text-white font-semibold">{siteName}</h1>}
                    </div>
                    <div className="hidden lg:flex w-96 justify-center items-center space-x-6">
                        {[{ path: "/", label: "Home" }, { path: "/blogs", label: "Blogs" }, { path: "/resources", label: "Resources" }, { path: "/about", label: "About Us" }].map(({ path, label }) =>
                            location.pathname === path ? (
                                <Button asChild key={path} className="bg-black text-white">
                                    <Link to={path}>{label}</Link>
                                </Button>
                            ) : (
                                <Link key={path} to={path} className="text-gray-400 hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
                                    {label}
                                </Link>
                            )
                        )}
                    </div>
                    <div className="items-center gap-5 hidden lg:flex">
                        <input type="text" placeholder="Search..." className={`text-white border px-3 py-2 rounded-lg transition-all duration-300 ease-in-out ${searchVisible ? "w-48 opacity-100" : "w-0 opacity-0"}`} />
                        <button onClick={() => setSearchVisible(!searchVisible)} className="p-2 rounded-full hover:bg-gray-200 transition">
                            <Search className="w-6 h-6 text-gray-400" />
                        </button>
                        <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 transition" onClick={() => setMenuOpen(false)}>
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                        {isAuthenticated ? (
                            <Button asChild className="bg-black" onClick={() => setMenuOpen(false)}>
                                <Link to="/logout">Logout</Link>
                            </Button>) :
                            (<Button asChild className="bg-black" onClick={() => setMenuOpen(false)}>
                                <Link to="/login">Login</Link>
                            </Button>)}
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1">
                            <div className={`w-6 h-[3px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
                            <div className={`w-6 h-[3px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></div>
                            <div className={`w-6 h-[3px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                        </button>
                    </div>
                </div>
                <div ref={menuRef} className={`lg:hidden absolute top-16 left-0 w-full bg-[#191919] flex flex-col items-center gap-5 py-7 transition-all duration-500 ease-in-out ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {[{ path: "/", label: "Home" }, { path: "/blogs", label: "Blogs" }, { path: "/resources", label: "Resources" }, { path: "/about", label: "About Us" }].map(({ path, label }) =>
                        location.pathname === path ? (
                            <Button asChild key={path} className="bg-black text-white text-center" onClick={() => setMenuOpen(false)}>
                                <Link to={path}>{label}</Link>
                            </Button>
                        ) : (
                            <Link key={path} to={path} className="text-gray-400 hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
                                {label}
                            </Link>
                        )
                    )}
                    <input type="text" placeholder="Search..." className="text-white border px-3 py-2 rounded-lg" />
                    <div className="flex gap-5">
                        <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 transition" onClick={() => setMenuOpen(false)}>
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                        {isAuthenticated ? (
                            <Button asChild className="bg-black" onClick={() => setMenuOpen(false)}>
                                <Link to="/logout">Logout</Link>
                            </Button>) :
                            (<Button asChild className="bg-black" onClick={() => setMenuOpen(false)}>
                                <Link to="/login">Login</Link>
                            </Button>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
