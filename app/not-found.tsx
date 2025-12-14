import Link from 'next/link';
import { Home, Search, ShoppingCart } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-blue-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
          <div className="mt-3 inline-flex">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help?{' '}
            <Link href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}