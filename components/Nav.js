import Link from "next/link";

export default function Nav() {
    return (
        <nav
            className="
        flex 
        flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-white">
            <div>
                <Link href='/' passHref>
                    <div>
                        {/* eslint-disable @next/next/no-img-element */}
                        <img
                            className="m-3"
                            src="/strapi-logo.png"
                            width={200}
                            height={50}
                            alt="Strapi Logo"
                        >
                        </img>
                    </div>
                </Link>
            </div>

            <svg
                xmlns="http:/www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>

            <div
                className="hidden w-full md:flex md:items-center md:w-auto"
                id="menu">
                <ul
                    className="
                pt-4
                text-base text-gray-700
                md:flex
                md:justify-between
                md:pt-0 space-x-2">
                    <li>
                        <Link href="/">
                            <div className="md:p-2 py-2 block hover:text-purple-400">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/films">
                            <div className="md:p-2 py-2 block hover:text-purple-400" href="#">
                                Films
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}