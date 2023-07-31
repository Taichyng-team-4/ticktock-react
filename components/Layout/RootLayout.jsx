import MainNavigation from "../UI/MainNavigation";

export default function RootLayout({ children }) {
  return (
    <main className="h-full w-full bg-red-500 bg-opacity-40">
      <MainNavigation />
      {children}
    </main>
  );
}
