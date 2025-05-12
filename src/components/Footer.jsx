import { EnvelopeIcon, PhoneIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CodeBracketIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
            your name
            </span>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:info@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <EnvelopeIcon className="h-6 w-6" />
            </a>
            <a
              href="tel:+55 9999999999"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <PhoneIcon className="h-6 w-6" />
            </a>
     
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}