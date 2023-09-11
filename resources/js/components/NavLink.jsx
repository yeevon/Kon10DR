import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center text-orange-500 p-6 text-3xl font-medium leading-5 transition duration-150 ease-in-out focus:outline-none '
            }
        >
            {children}
        </Link>
    );
}
