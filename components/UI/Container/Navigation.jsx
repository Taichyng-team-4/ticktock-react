export default function Container({ left, right, children }) {
  return (
    <header className="w-full">
      <nav className="flex h-20 w-full justify-center bg-[#8CBDB9]">
        <div className="h-full w-1/12 flex-grow bg-pink-400">{left}</div>
        <div className="h-full w-full min-w-[760px] max-w-[1280px] flex-grow">
          {children}
        </div>
        <div className="h-full w-1/12 flex-grow bg-yellow-400">{right}</div>
      </nav>
    </header>
  );
}
