import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../../public/assets/style.css";

export default function GuestLayout({ children }) {
    return (
        <>
            <Header />

            <div>{children}</div>
            <Footer />
        </>
    );
}
