import './globals.css'
import { Inter } from 'next/font/google'
import StyledJsxRegistry from '../app/styled-components/registry'
import Buttom from './styled-components/buttom'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledJsxRegistry>
          {children}
          </StyledJsxRegistry>
      </body>
    </html>
  )
}