import Link from 'next/link';

const routes = [
    {
        baseUrl: '/yourself',
        children: [
            {
                href: '/about-me',
                text: 'About Me',
            },
            {
                href: '/resume',
                text: 'Resume',
            },
            {
                href: '/project',
                text: 'Project',
            },
            {
                href: '/contact',
                text: 'Contact',
            },
        ],
    },
];

export default function NavLink() {
    return (
        <div className="flex flex-row w-full h-20 items-center bg-gray-100 text-black">
            <p className="w-1/2 ml-20">
                <b>Maya Nelson</b> / PROJECT MANAGER
            </p>
            <div className="relative w-1/2 mb-7 max-lg:hidden">
                <ul className="flex flex-row absolute right-10">
                    {routes.map((route) =>
                        route.children.map((children) => (
                            <li
                                key={children.href}
                                className="hover:text-blue-300 mr-7"
                            >
                                <Link href={route.baseUrl + children.href}>
                                    {children.text}
                                </Link>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
