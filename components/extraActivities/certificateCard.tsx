import Image from "next/image";
export default function CertificateCard({ image, description }: { image: string; description: string }) {
    return (
        <div className="bg-secondary p-4 rounded-lg shadow-lg">
            <Image src={image} alt="Certificate" width={400} height={200} className="mb-5" />
            <p className="text-center text-text">{description}</p>
        </div>
    );
}