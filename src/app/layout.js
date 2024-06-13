import "./globals.css";


export const metadata = {
  title: "Emily InPelves",
  description: "Emily Leal Web CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="text-darkGreen">
        {children}
      </body>
    </html>
  );
}
