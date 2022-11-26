import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );

  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounded?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between max-w-2xl ">
        <div className="w-16 h-16 bg-red-200"></div>
        <div>vs</div>
        <div className="w-16 h-16 bg-red-200"></div>
      </div>

      <div>{data}</div>
    </div>
  );
}
