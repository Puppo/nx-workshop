import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="mt-16 lg:mt-64 text-white bg-gray-900 md:p-16 sm:p-8 p-4 leading-7">
      <p className="text-2xl mb-4">Nx Workshop</p>
      <p>A workshop create by surfers to surfers and friends</p>
      <p>
        Built by{' '}
        <a
          className="text-white hover:underline"
          href="https://scastiel.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luca Del Puppo
        </a>{' '}
        (
        <a
          className="text-white hover:underline"
          href="https://twitter.com/puppo92"
          target="_blank"
          rel="noopener noreferrer"
        >
          @puppo92
        </a>
        )
      </p>
    </footer>
  )
}
