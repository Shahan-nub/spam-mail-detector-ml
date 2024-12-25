import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col items-center mt-20 min-h-screen gap-10">
        <h1 className="font-bold text-5xl">
            SPAM MAIL DETECTOR
        </h1>
        <Form></Form>
    </div>
  );
}
