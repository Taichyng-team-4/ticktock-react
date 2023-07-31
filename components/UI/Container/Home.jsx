export default function Container({ left, right, children }) {
  return (
    <main className="flex h-full min-h-screen w-full justify-center bg-purple-300">
      <div className="h-full min-h-screen w-1/12 flex-grow bg-pink-500">
        {left}
      </div>
      <div className="h-full min-h-screen w-full min-w-[760px] max-w-[1280px] flex-grow bg-blue-300">
        {children}
      </div>
      <div className="h-full min-h-screen w-1/12 flex-grow bg-yellow-500">
        {right}
      </div>
    </main>
  );
}
