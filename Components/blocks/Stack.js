
import Link from "next/link";
import StackWrapper from "@/Components/Molecules/Stack-wrapper";

export default function Stack(){
    return (
            <section id={"stack"} className={"z-20 py-[60px] min-h-screen lg:py-0 w-full text-primary-content relative"}>
                <div className={"relative justify-end px-10 lg:grid grid-cols-2 min-h-screen  pt-[60px] lg:pt-0"}>
                    <div className={"text-3xl self-center lg:p-10 text-left relative uppercase lg:col-span-1"}>
                        <h2 className={"font-title font-extralight hover:text-secondary-focus transition-colors duration-300 capitalize text-6xl mb-10 lg:text-left"}>Stack technique</h2>
                        <StackWrapper/>
                    </div>
                </div>
            </section>
    )
}