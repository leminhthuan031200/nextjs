'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment as SelectedLayout } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

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
    let title = 'Yourself';
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        document.title = title;
    });

    const isActive = (href: string, text: string): string => {
        title = text;
        return SelectedLayout() === href ? 'text-blue-700' : '';
    };

    const menu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        isMenu ? setIsMenu(false) : setIsMenu(true);
    };

    return (
        <>
            <div className="sticky top-0 z-10">
                <div className="flex flex-row w-full h-20 items-center bg-gray-100 text-black">
                    <p className="w-1/2 min-w-60 ml-20 text-xl font-light">
                        <span className="text-2xl font-black">Maya Nelson</span>
                        / PROJECT MANAGER
                    </p>
                    <div className="relative w-1/2 mb-7 text-base">
                        <button
                            className="lg:hidden text-right absolute right-10"
                            onClick={(
                                e: React.MouseEvent<
                                    HTMLButtonElement,
                                    MouseEvent
                                >
                            ) => menu(e)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width={25}
                                height={25}
                            >
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </button>
                        <ul
                            className={`absolute ${clsx({
                                'block right-10 top-10': isMenu === true,
                                'flex flex-row max-lg:hidden right-10':
                                    isMenu !== true,
                            })} `}
                        >
                            {routes.map((route) =>
                                route.children.map((children) => (
                                    <li
                                        key={children.href}
                                        className="hover:text-blue-700 mr-7"
                                    >
                                        <Link
                                            href={route.baseUrl + children.href}
                                            className={`font-light ${isActive(
                                                children.href.substring(1),
                                                children.text
                                            )}`}
                                        >
                                            {children.text}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
