import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
const Roots = () => {
    return (
        <div className="w-full md:max-w-6xl mx-auto">
            < Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;