import { Navigation } from '../app/components/Navigation'
// import About from './about/About'
import 'styles/globals.css'

export const metadata = {
  title: 'page con Next.js',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>primera app de next</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
