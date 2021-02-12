import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-900 ">
      <Link href="/">
        <a className="text-gray-50 text-lg flex space-x-2">Nx Workshop</a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/workshop">
              <a className="text-gray-50 hover:underline">Workshop</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
