import './globals.css'
import StyledJsxRegistry from './lib/registry'
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