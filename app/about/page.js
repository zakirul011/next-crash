import Image from "next/image";
import Button from "@/app/components/Button";
import thumb from "@/public/1676233425651.jpg";

export default function AboutPage() {
  return (
    <main className="mt-6">
      <h1>About PAGE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        voluptatibus eligendi delectus quia, minima consequuntur sed dignissimos
        veniam magni culpa a natus tempore aspernatur minus dolor quae saepe
        facere. Amet.
      </p>

      <Button />

      <div className="w-40">
        <Image src={thumb} alt="Thumb image" />
      </div>
    </main>
  );
}
