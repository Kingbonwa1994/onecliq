import { router } from 'next/navigation';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="flex-grow mr-0">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; 2023 1cliQ
      </footer>
    </div>
  );
}