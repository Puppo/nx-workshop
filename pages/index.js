import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout widthClass="max-w-4xl">
      <div className="flex flex-col items-center mb-16">
        <div className="flex flex-col self-stretch">
          <p className="text-white text-center text-4xl mt-32 font-bold">
            Welcome to <strong className="font-bold">Nx Workshop</strong>
            <br className="hidden sm:inline" /> created by{' '}
            <a href="https://delpuppo.net/about" className="hover:underline">
              Puppo
            </a>{' '}
            with{' '}
            <a href="https://www.flowing.it/" className="hover:underline">
              @Flowing
            </a>
            .
          </p>
        </div>
        <div className="text-center mt-8">
          <div className="flex  space-x-4">
            <a href="/workshop" className="btn btn-primary btn-big">
              Go to the workshop
            </a>

            <a
              href="https://github.com/flowingis/flw-academy-nx-workshop"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-big"
            >
              Go to the GitHub repo
            </a>
          </div>
        </div>
        <div data-aos="fade" className="flex flex-col self-stretch">
          <div className="text-center mt-8"></div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
