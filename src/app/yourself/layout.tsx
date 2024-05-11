import React from 'react';
import NavLink from '@/app/yourself/nav-link';

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="block">
                <NavLink />
                {children}
            </div>
        </>
    );
}
