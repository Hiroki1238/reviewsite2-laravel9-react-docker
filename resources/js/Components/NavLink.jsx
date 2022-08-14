import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center no-underline px-4 pt-1 border-b-2 border-transparent text-xl font-medium leading-5 text-white focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out'
                    : 'inline-flex items-center no-underline px-4 pt-1 border-b-2 border-transparent text-xl font-medium leading-5 text-white hover:text-cyan-200 hover:border-gray-300 focus:outline-none focus:text-gray-400 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
