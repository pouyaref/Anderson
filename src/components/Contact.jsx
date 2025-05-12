import { 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  LinkIcon
} from '@heroicons/react/24/outline';
import { 
  FaInstagram, 
  FaFacebook, 
  FaGithub, 
  FaTelegram, 
  FaLinkedin 
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get In Touch</h2>
      
   
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Info</h3>
        
        <div className="space-y-4">

          <div className="flex items-start">
            <PhoneIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-3" />
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Phone</h4>
              <a href="tel:+989123456789" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                +55 9999999999
              </a>
            </div>
          </div>

     
          <div className="flex items-start">
            <EnvelopeIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-3" />
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
              <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                Info@gmail.com
              </a>
            </div>
          </div>

        
          <div className="flex items-start">
            <GlobeAltIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-3" />
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Website</h4>
              <a href="https://pouyaaref.ir/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center">
              Anderson.com <LinkIcon className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

       
          <div className="pt-4">
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <FaTelegram className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}