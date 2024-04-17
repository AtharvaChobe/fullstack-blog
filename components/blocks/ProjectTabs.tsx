"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { BiArrowFromTop, BiLink } from "react-icons/bi";
import { CgArrowDown } from "react-icons/cg";
import Link from "next/link";

export function ProjectTabs() {
    const tabs = [
        {
            title: "Project 1",
            value: "Project 1",
            content: (
                <div className="w-full overflow-hidden relative h-72 md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="flex gap-5 mb-4">
                        Algo Trading
                        <a href="https://github.com/Hrushikeshhad123/algo-trading"> <BiLink size={30} color="red" /> </a>
                    </p>
                    <Image
                        src="/projects/algo-trading.jpg"
                        alt="dummy image"
                        width="500"
                        height="500"
                        className="object-cover object-right-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                    {/* <a href="https://github.com/Hrushikeshhad123/algo-trading">Link <BiLink/> </a> */}
                </div>
            ),
        },
        {
            title: "Project 2",
            value: "Project 2",
            content: (
                <div className="w-full overflow-hidden relative h-72 md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="flex gap-5 mb-4">
                        Bigbasket Chatbot
                        <a href="https://github.com/Hrushikeshhad123/BiGBasket-Chatbot"> <BiLink size={30} color="red" /> </a>
                    </p>
                    <Image
                        src="/projects/chatbot.jpg"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                    {/* <a href="https://github.com/Hrushikeshhad123/algo-trading">Link <BiLink/> </a> */}

                </div>
            ),
        },
        {
            title: "Project 3",
            value: "Project 3",
            content: (
                <div className="w-full overflow-hidden relative h-72 md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="flex gap-5 mb-4">
                        Crack Detection
                        <a href="https://github.com/Hrushikeshhad123/Crack-Detection"> <BiLink size={30} color="red" /> </a>
                    </p>
                    <Image
                        src="/projects/cracks.jpg"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                    {/* <a href="https://github.com/Hrushikeshhad123/algo-trading">Link <BiLink/> </a> */}

                </div>
            ),
        },
        {
            title: "Project 4",
            value: "Project 4",
            content: (
                <div className="w-full overflow-hidden relative h-72 md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="flex gap-5 mb-4">
                        Helmet Vs No Helmet
                        <a href="https://github.com/Hrushikeshhad123/Helmet-vs-no_helmet"> <BiLink size={30} color="red" /> </a>
                    </p>
                    <Image
                        src="/projects/headgear.jpg"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                    {/* <a href="https://github.com/Hrushikeshhad123/algo-trading">Link <BiLink/> </a> */}

                </div>
            ),
        },
        {
            title: "Project 5",
            value: "Project 5",
            content: (
                <div className="w-full overflow-hidden relative h-72 md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="flex gap-5 mb-4">
                        Seatbelt Vs No Seatbelt
                        <a href="https://github.com/Hrushikeshhad123/seat-belt-vs-no-seatbelt"> <BiLink size={30} color="red" /> </a>
                    </p>
                    <Image
                        src="/projects/seatbelt.jpg"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                    {/* <a href="https://github.com/Hrushikeshhad123/algo-trading">Link <BiLink/> </a> */}

                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-[80%] mx-auto w-full  items-start justify-start my-40">
            <h1>My Projects <CgArrowDown /> </h1>
            <Tabs tabs={tabs} />
        </div>
    );
}

// const DummyContent = () => {
//     return (
//         <Image
//             src="/projects/algo-trading.jpg"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-center h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//         />
//     );
// };
