import CertificateCard from "./certificateCard";

type Certificate = {
    image: string;
    description: string;
};
const certificates: Certificate[] = [
    {
        image: "/certificates/digitalTest.png",
        description: "Certificate 1 description goes here."
    },
    {
        image: "/certificates/digitalTest.png",
        description: "Certificate 1 description goes here."
    },
    {
        image: "/certificates/digitalTest.png",
        description: "Certificate 1 description goes here."
    },
    {
        image: "/certificates/digitalTest.png",
        description: "Certificate 1 description goes here."
    },
    {
        image: "/certificates/digitalTest.png",
        description: "Certificate 1 description goes here."
    },
    
];
export default function ExtraActivities() {
    return <div className="min-h-screen bg-tertiary py-10" id="certificates">
        <h1 className="text-4xl text-center mb-10 text-cyan-300 text-shadow-lg/50 text-shadow-cyan-400">
                Certificates
            </h1>
        <div className="grid grid-cols-3 gap-6 w-4/5 mx-auto">
            {certificates.map((cert, index) => (
                <CertificateCard key={index} image={cert.image} description={cert.description} />
            ))}
        </div>
        
    </div>
}