import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

export default function Home() {
    return (
        //Mobile
        <div>
            {/* Mobile */}
            <div className="flex flex-col h-svh bg-slate-100 overflow-hidden lg:hidden">
                <main className="flex-grow p5">
                    <div className="pt-5 pl-5">

                        <h1 className="text-xl">Agende seu serviço</h1>
                        <p className="opacity-40 mb-2">Categorias</p>
                        <div className="py-4 flex gap-4 mb-6 overflow-x-scroll hide-scrollbar">
                            <p className="text-center">
                                <img className="p-12 bg-black rounded-full" src="" alt="" />
                                Lavação
                            </p>
                            <p className="text-center">
                                <img className="p-12 bg-black rounded-full" src="" alt="" />
                                Pintura
                            </p>
                            <p className="text-center">
                                <img className="p-12 bg-black rounded-full" src="" alt="" />
                                Latoaria
                            </p>
                            <p className="text-center">
                                <img className="p-12 bg-black rounded-full" src="" alt="" />
                                Aseilaoq
                            </p>
                            <p className="text-center">
                                <img className="p-12 bg-black rounded-full" src="" alt="" />
                                Aseilaoq
                            </p>
                            <p className="text-center">
                                <img className="p-12 bg-black rounded-full" src="" alt="" />
                                Aseilaoq
                            </p>
                            <p className="text-center">
                                <img className="p-12 bg-black rounded-full" src="" alt="" />
                                Aseilaoq
                            </p>
                        </div>

                        <h1 className="text-xl">Prestadores de serviço</h1>
                        <p className="opacity-40 mb-2">Famosos no Clean Wheel</p>
                        <div className="py-4 flex gap-4 overflow-x-scroll hide-scrollbar">
                            <p className="text-left">
                                <img className="p-16 bg-black rounded-xl" src="" alt="" />
                                Top Car Lavação
                            </p>
                            <p className="text-left">
                                <img className="p-16 bg-black rounded-xl" src="" alt="" />
                                Auto Painting
                            </p>
                            <p className="text-left">
                                <img className="p-16 bg-black rounded-xl" src="" alt="" />
                                Lavação
                            </p>
                            <p className="text-left">
                                <img className="p-16 bg-black rounded-xl" src="" alt="" />
                                Lavação
                            </p>
                            <p className="text-left">
                                <img className="p-16 bg-black rounded-xl" src="" alt="" />
                                Lavação
                            </p>
                            <p className="text-left">
                                <img className="p-16 bg-black rounded-xl" src="" alt="" />
                                Lavação
                            </p>
                            <p className="text-left">
                                <img className="p-16 bg-black rounded-xl" src="" alt="" />
                                Lavação
                            </p>
                        </div>
                    </div>
                    <footer className="bg-slate-200 shadow-2xl shadow-black border-t-2 border-zinc-300 flex w-full h-16 fixed bottom-0 place-content-evenly py-3">
                        <FiHome className="size-10" />
                        <IoIosSearch className="size-10" />
                        <IoCalendarOutline className="size-10" />
                        <VscLibrary className="size-10" />
                    </footer>
                </main>
            </div>

            {/* Desktop */}
            <div className="grid grid-cols-12">
                <div className="bg-slate-200 h-screen col-span-2 grid-flow">
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><FiHome className="size-6 mr-2" />Principal</p>
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><IoIosSearch className="size-6 mr-2" />Pesquisar</p>
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><IoCalendarOutline className="size-6 mr-2" />Agenda</p>
                    <div className="">
                        <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><CgProfile className="size-6 mr-2" />Meu Perfil</p>
                    </div>
                </div>
            </div>
        </div>

    )
}