'use client'

export function Footer() {
    return (
        <footer className="row-start-3 z-10 text-sm text-gray-500 mt-6 text-center">
            &copy; {new Date().getFullYear()} Hevarto. All rights reserved.
        </footer>
    )
}