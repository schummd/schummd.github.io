import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav class="bg-transparent">
      <div class="fixed w-screen flex flex-wrap items-center justify-between mx-auto p-8">
        <a onClick={() => navigate('/')} class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <img class="h-8" src={logo} alt="Schumm Logo" />
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-montserrat font-normal flex flex-row md:p-0 md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a onClick={() => navigate('/works')} class="block py-1 px-3 text-current hover:text-gray-500 cursor-pointer">Works</a>
            </li>
            <li>
              <a onClick={() => navigate('/publications')} class="block py-1 px-3 text-current hover:text-gray-500 cursor-pointer">Publications</a>
            </li>
            <li>
              <a onClick={() => navigate('/experience')} class="block py-1 px-3 text-current hover:text-gray-500 cursor-pointer">Experience</a>
            </li>
            {/* <li>
              <a onClick={() => navigate('/theses')} class="block py-1 px-3 text-current hover:text-gray-500 cursor-pointer">Theses</a>
            </li> */}
            <li>
              <a onClick={() => navigate('/about')} class="block py-1 px-3 text-current hover:text-gray-500 cursor-pointer">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:hidden fixed inset-x-0 bottom-0 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <ul class="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a onClick={() => navigate('/works')} class="block py-1 px-2.5 text-current hover:text-gray-500">Works</a>
            </li>
            <li>
              <a onClick={() => navigate('/publications')} class="block py-1 px-2.5 text-current hover:text-gray-500">Publications</a>
            </li>
            <li>
              <a onClick={() => navigate('/experience')} class="block py-1 px-2.5 text-current hover:text-gray-500">Experience</a>
            </li>
            <li>
              <a onClick={() => navigate('/about')} class="block py-1 px-2.5 text-current hover:text-gray-500">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
