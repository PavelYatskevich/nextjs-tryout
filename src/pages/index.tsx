export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounded?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between max-w-2xl ">
        <div className="w-16 h-16 bg-red-200"></div>
        <div>vs</div>
        <div className="w-16 h-16 bg-red-200"></div>
      </div>
    </div>
  );
}
