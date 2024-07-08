import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="py-16 md:px-[165px] bg-[#263238] px-[40px]">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
                <div className="flex flex-col lg:gap-10 gap-5 lg:mb-0 max-w-[350px]">
                    <img
                        src="/footer/Logo.png"
                        alt="footer logo"
                        className="w-48 h-7"
                    />

                    <div>
                        <p className="text-sm font-[400] text-[#F5F7FA]">
                            <span className="block mb-2">
                                Copyright © 2020 Nexcent ltd.
                            </span>
                            <span className="block">All rights reserved</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link href={"/"}>
                            <img src="/footer/insta.png" alt="Instagram logo" />
                        </Link>
                        <Link href={"/"}>
                            <img src="/footer/web.png" alt="Web logo" />
                        </Link>
                        <Link href={"/"}>
                            <img src="/footer/twitter.png" alt="Twitter logo" />
                        </Link>
                        <Link href={"/"}>
                            <img src="/footer/youtube.png" alt="YouTube logo" />
                        </Link>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 max-w-[635px]">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-[600] text-[#ffffff] mb-2">
                            Company
                        </h2>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Pricing Us
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Testimonial
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-[600] text-[#ffffff] mb-2">
                            Support
                        </h2>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Help center
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Terms of service
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Legal
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-[400] text-[#F5F7FA]"
                        >
                            Status
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 grid-flow-col lg:col-span-1 col-span-2">
                        <h2 className="text-xl font-[600] text-[#ffffff] mb-2">
                            Stay Up To Date
                        </h2>
                        <div className="relative w-[255px] bg-[#515b60] rounded-lg">
                            <input
                                type="text"
                                placeholder="Your email address"
                                className="py-3 px-4 text-[#D9DBE1] rounded-lg bg-[#515b60] placeholder:text-[#D9DBE1] text-sm out"
                            />
                            <img
                                src="/footer/send.png"
                                alt="send icon"
                                className="w-[18px] h-[18px] absolute top-1/2 right-3 transform -translate-y-1/2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
