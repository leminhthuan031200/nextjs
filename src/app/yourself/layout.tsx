import React from 'react';
import NavLink from '@/app/yourself/nav-link';

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <NavLink />
            <div className="flex">{children}</div>
        </>
    );
}
