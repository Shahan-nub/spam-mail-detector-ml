import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col items-center mt-12 min-h-screen gap-10">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-5xl">
            SPAM MAIL DETECTOR
        </h1>
        <Form></Form>
    </div>
  );
}
