import '../styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Guinea Pig Game</title>
      </head>
      <body className="min-h-screen bg-gray-100">
        <div className="max-w-screen-md mx-auto bg-white shadow-md overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;