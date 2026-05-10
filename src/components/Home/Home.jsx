import { Link } from 'react-router-dom';
import heroUrl from '../../assets/landing-hero.svg'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
                <div className="space-y-6">
                    <p className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
                        React Router v6 • Nested routes • Loaders
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        React Router demo for real-world layouts.
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-600">
                        A simple, modern project that shows nested routes, loaders, and reusable layouts using
                        {' '}
                        <span className="font-mono">react-router-dom</span>.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-200"
                        >
                            Explore the demo
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50 focus:ring-4 focus:ring-gray-200"
                        >
                            Contact us
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-2 text-sm text-gray-600 sm:grid-cols-3">
                        <div className="rounded-lg border border-gray-100 bg-white p-3">
                            <p className="font-semibold text-gray-900">Nested routes</p>
                            <p className="mt-1">Clean layouts with <span className="font-mono">Outlet</span>.</p>
                        </div>
                        <div className="rounded-lg border border-gray-100 bg-white p-3">
                            <p className="font-semibold text-gray-900">Route loaders</p>
                            <p className="mt-1">Fetch before you render.</p>
                        </div>
                        <div className="rounded-lg border border-gray-100 bg-white p-3">
                            <p className="font-semibold text-gray-900">Red theme</p>
                            <p className="mt-1">A bold, consistent brand.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-6 rounded-3xl bg-red-50 blur-2xl" aria-hidden="true" />
                    <img
                        className="relative w-full rounded-3xl border border-red-100 bg-white p-3"
                        src={heroUrl}
                        alt="Routing illustration"
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
}
