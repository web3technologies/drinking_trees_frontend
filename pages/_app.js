import Link from 'next/link'
import '../styles/globals.css'
import {NavBar, MainFrame} from "./styles/base"

const GIF = require('../images/preview.gif')

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainFrame>
        <NavBar className="border-b p-6">

          <p className="text-4xl font-bold" style={{ fontSize: '38px' }}>Drinking Trees Marketplace</p>

          <div className="flex mt-4">

            <Link href="/">
              <a className="mr-6 text-green-500" style={{ fontSize: '22px' }}>
                Home
              </a>
            </Link>

            <Link href="/marketplace">
              <a className="mr-6 text-green-500" style={{ fontSize: '22px' }}>
                Marketplace
              </a>
            </Link>

            <Link href="/my-assets">
              <a className="mr-6 text-green-500" style={{ fontSize: '22px' }}>
                My Trees
              </a>
            </Link>

            <Link href="/mint">
              <a className="mr-6 text-green-500" style={{ fontSize: '22px' }}>
                Mint
              </a>
            </Link>

            <Link href="/admin">
              <a className="mr-6 text-green-500" style={{ fontSize: '22px' }}>
                Admin
              </a>
            </Link>

          </div>

        </NavBar>
        </MainFrame>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
