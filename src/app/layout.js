import "./globals.css";

import { Sorts_Mill_Goudy, Meow_Script, Monsieur_La_Doulaise} from 'next/font/google'
 
const goudy = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sorts-mill-goudy',
})

const meow = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-meow-script',
})

const doulaise = Monsieur_La_Doulaise({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-monsieur_la_doulaise',
})
 
export const metadata = {
  title: "Emily InPelves",
  description: "Emily Leal Web CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${goudy.variable} ${meow.variable} ${doulaise.variable}`}>
      <body className={`text-darkGreen font-goudy`}>
        {children}
      </body>
    </html>
  );
}
