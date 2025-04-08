import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchVisible, setSearchVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [logoUrl, setLogoUrl] = useState("/images/logo.png");
    const [siteName, setsiteName] = useState("BlogMaze");
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const { isAuthenticated } = useAuth();
    const menuRef = useRef(null);

    useEffect(() => {
        setMenuOpen(false);
        const fetchLogo = async () => {
            try {
                const RESPONSE = await axios.get(import.meta.env.VITE_LOGO_URL);
                const LOGOPATH = RESPONSE.data.data[0]?.Logo?.url;
                const SITENAME = RESPONSE.data.data[0]?.SiteName;
                if (LOGOPATH) setLogoUrl(LOGOPATH);
                if (SITENAME) setsiteName(SITENAME);
            } catch (error) {
                console.log("Error fetching logo:", error);
            }
        };
        fetchLogo();
    }, [location.pathname]);

    const fetchSuggestions = async (query) => {
        if (!query) return setSuggestions([]);

        try {
            const [blogsRes, resourcesRes] = await Promise.all([
                axios.get(`${import.meta.env.VITE_STRAPI_URL}blogposts?filters[mainheading][$containsi]=${query}`),
                axios.get(`${import.meta.env.VITE_STRAPI_URL}resources?filters[mainheading][$containsi]=${query}`),
            ]);

            const results = [
                ...blogsRes.data.data.map((item) => ({ ...item, type: "blog" })),
                ...resourcesRes.data.data.map((item) => ({ ...item, type: "resource" })),
            ];

            setSuggestions(results.slice(0, 5));
        } catch (err) {
            console.error("Suggestion error:", err);
            setSuggestions([]);
        }
    };

    return (
        <div className="sticky top-0 z-10">
            <div className="bg-[#191919] p-4">
                <div className="flex items-center justify-between lg:justify-around">
                    <Link to="/">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                {logoUrl && (
                                    <img src={logoUrl} alt="Logo" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                                )}
                            </div>
                            {siteName && <h1 className="text-xl text-white font-semibold">{siteName}</h1>}
                        </div>
                    </Link>

                    <div className="hidden lg:flex w-96 justify-center items-center space-x-6">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/blogs", label: "Blogs" },
                            { path: "/resources", label: "Resources" },
                            { path: "/about", label: "About Us" },
                        ].map(({ path, label }) =>
                            location.pathname === path ? (
                                <Button asChild key={path} className="bg-black text-white">
                                    <Link to={path}>{label}</Link>
                                </Button>
                            ) : (
                                <Link key={path} to={path} className="text-gray-400 hover:text-gray-300 transition">
                                    {label}
                                </Link>
                            )
                        )}
                    </div>

                    <div className="flex items-center gap-7">
                        <button onClick={() => setSearchVisible(!searchVisible)} className="p-2 cursor-pointer rounded-full hover:bg-gray-200 transition">
                            <Search className="w-6 h-6 text-gray-400" />
                        </button>

                        <div className="items-center gap-5 hidden lg:flex">
                            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 transition">
                                <Link to="/contact">Contact Us</Link>
                            </Button>
                            {isAuthenticated ? (
                                <Button asChild className="bg-black">
                                    <Link to="/logout">Logout</Link>
                                </Button>
                            ) : (
                                <Button asChild className="bg-black">
                                    <Link to="/login">Login</Link>
                                </Button>
                            )}
                        </div>

                        <div className="lg:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1">
                                <div className={`w-6 h-[3px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
                                <div className={`w-6 h-[3px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></div>
                                <div className={`w-6 h-[3px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div ref={menuRef} className={`lg:hidden absolute top-16 left-0 w-full bg-[#191919] flex flex-col items-center gap-5 py-7 transition-all duration-500 ease-in-out ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {[
                        { path: "/", label: "Home" },
                        { path: "/blogs", label: "Blogs" },
                        { path: "/resources", label: "Resources" },
                        { path: "/about", label: "About Us" },
                    ].map(({ path, label }) =>
                        location.pathname === path ? (
                            <Button asChild key={path} className="bg-black text-white text-center">
                                <Link to={path}>{label}</Link>
                            </Button>
                        ) : (
                            <Link key={path} to={path} className="text-gray-400 hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
                                {label}
                            </Link>
                        )
                    )}
                    <div className="flex gap-5">
                        <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300 transition">
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                        {isAuthenticated ? (
                            <Button asChild className="bg-black">
                                <Link to="/logout">Logout</Link>
                            </Button>
                        ) : (
                            <Button asChild className="bg-black">
                                <Link to="/login">Login</Link>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Search Input */}
                <div className={`relative z-30`}>
                    <div className={`absolute left-0 right-0 flex items-center py-4 px-10 transition-all duration-500 ease-in-out transform ${searchVisible ? "translate-y-5 opacity-100 pointer-events-auto" : "-translate-y-5 opacity-0 pointer-events-none"}`}>
                        <input
                            onChange={(e) => {
                                const value = e.target.value;
                                setSearchTerm(value);
                                fetchSuggestions(value);
                            }}
                            type="text"
                            value={searchTerm}
                            placeholder="Search..."
                            className="text-white bg-[#0707079a] px-3 border border-gray-700 focus:border-gray-500 focus:outline-none py-2 rounded-l-lg transition-all duration-300 ease-in-out w-full"
                        />
                        <button className="border border-l-0 border-gray-700 p-2 cursor-pointer rounded-r-lg bg-[#0707079a] hover:bg-gray-200 transition">
                            <Search className="w-6 h-6 text-gray-400" />
                        </button>
                    </div>

                    {/* Suggestions Dropdown */}
                    {suggestions.length > 0 && (
                        <div className="absolute left-10 right-10 top-full bg-[#1f1f1f] z-20 mt-1 rounded-lg shadow-lg border border-gray-700 max-h-60 overflow-y-auto">
                            {suggestions.map((sug) => (
                                <div
                                    key={sug.id}
                                    onClick={() => {
                                        navigate(`/${sug.type === "blog" ? "blogs" : "resources"}/${sug.id}`);
                                        setSuggestions([]);
                                        setSearchVisible(false);
                                    }}
                                    className="px-4 py-2 text-gray-300 hover:bg-[#333] cursor-pointer"
                                >
                                    {sug.attributes?.mainheading || "Untitled"}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
