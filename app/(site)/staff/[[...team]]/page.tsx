import { getExecutives } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
    const executives = await getExecutives();

    console.log("Executives: ", executives);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex font-Literaturnaya-Bold text-xxxl pt-4 pl-5">
                Staff Page
            </div>
            <div className="flex flex-wrap justify-center items-center p-5 pt-20">
                {executives.map((executive) => (
                    <div
                        key={executive.name}
                        className="executive-container m-4"
                    >
                        {executive.image && (
                            <div className="border-b-2 border-solid border-493725 w-64">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={executive.image}
                                        alt={executive.name}
                                        width={175}
                                        height={175}
                                        className="pb-2 pl-8 pr-8"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col items-center justify-center mt-2">
                            <p>{executive.name}</p>
                            <p>{executive.role}</p>
                            <a href={executive.url}>
                                link
                                {/* <LinkedinIcon size={32} round={true} /> */}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}