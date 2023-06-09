import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="fixed bg-white flex w-full flex-wrap justify-center items-center py-7 z-50 space-x-6">
        <h1 className="text-black font-secondary lg:text-base text-sm text-center">
          Join Test-Ace&apos;s{" "}
          <span className="text-[#1777CB] underline decoration-[#1777CB]">
            waitlist{" "}
          </span>{" "}
          , and take a survey to receive a free $10 Premium Membership with
          unlimited access to Test-Ace{" "}
        </h1>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdm4l9WiHSz_G6hbGMYv4VrzH-2cxQoaBGpGB42nPNlSleGMQ/viewform"
          target="_blank"
        >
          <button className="text-[#1777CB] font-secondary text-base underline decoration-[#1777CB]">
            Sign up now
          </button>
        </Link>
      </div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
