import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import LogOutBtn from "../pages/LogOutBtn"

export default function Home() {
    return (
        //Mobile
        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            {/* Mobile */}
            <div className="flex flex-col h-svh bg-slate-100 overflow-hidden xl:hidden">
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
            <div className="grid xl:grid-cols-12">
                <div className="bg-slate-200 lg:h-screen col-span-2 hidden xl:flex xl:flex-col">
                    <h1 className="font-semibold text-4xl m-2 mt-6 pl-6">Clean Wheels</h1>
                    <h2 className="font-semibold text-xl m-2 py-2 pl-6">Descobrir</h2>
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><FiHome className="size-6 mr-2" />Principal</p>
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><IoIosSearch className="size-6 mr-2" />Pesquisar</p>
                    <Link to="/agenda"><p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><IoCalendarOutline className="size-6 mr-2" />Agenda</p></Link>
                    <div className="flex-grow"></div>
                    <LogOutBtn />
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><CgProfile className="size-6 mr-2" />Meu Perfil</p>
                </div>

                <div className="bg-white lg:h-screen col-span-10 hidden xl:flex xl:flex-col overflow-y-scroll">
                    <div className="mx-40">
                        <div className="bg-green-200 p-2 text-center text-xl">Você tem 5 cupons! Aproveite seus descontos</div>
                        <h1 className="font-bold text-4xl mt-6">Promoções</h1>
                        <h2 className="font-semibold text-gray-700 mb-4">Aproveite agora as melhores promoções por tempo limitado!</h2>
                        <div className="flex gap-8">
                            <div className="bg-carro-env bg-no-repeat bg-center h-80 w-1/2 bg-cover rounded-xl"></div>
                            <div className="bg-limpeza-banc bg-no-repeat bg-center h-80 w-1/2 bg-cover rounded-xl"></div>
                        </div>
                        <h1 className="font-bold text-4xl mt-10">Agende seu serviço</h1>
                        <h2 className="font-semibold text-gray-700 mb-4">Categorias</h2>
                        <div className="flex gap-6">
                            <p className="w-1/6 text-xl">
                                <div className="bg-carro-env bg-no-repeat bg-center h-60 bg-cover rounded-xl mb-2"></div>
                                Lavação
                            </p>
                            <p className="w-1/6 text-xl">
                                <div className="bg-carro-env bg-no-repeat bg-center h-60 bg-cover rounded-xl mb-2"></div>
                                Polimento
                            </p>
                            <p className="w-1/6 text-xl">
                                <div className="bg-carro-env bg-no-repeat bg-center h-60 bg-cover rounded-xl mb-2"></div>
                                Envelopamento
                            </p>
                            <p className="w-1/6 text-xl">
                                <div className="bg-carro-env bg-no-repeat bg-center h-60 bg-cover rounded-xl mb-2"></div>
                                Revisão
                            </p>
                            <p className="w-1/6 text-xl">
                                <div className="bg-carro-env bg-no-repeat bg-center h-60 bg-cover rounded-xl mb-2"></div>
                                Elétrica
                            </p>
                            <p className="w-1/6 text-xl">
                                <div className="bg-carro-env bg-no-repeat bg-center h-60 bg-cover rounded-xl mb-2"></div>
                                Funilaria
                            </p>
                        </div>
                        <h1 className="font-bold text-4xl mt-6">Prestadores de serviço</h1>
                        <h2 className="font-semibold text-gray-700 mb-4">Famosos no Clean Wheel</h2>
                        <div className="bg-gray-300 flex gap-6 py-8 px-4 rounded-xl mb-8">
                            <div className="bg-carro-env bg-no-repeat bg-center w-1/6 h-60 bg-cover rounded-xl mb-2"></div>
                            <div className="w-1/6">
                                <h3 className="text-2xl font-semibold">Top Car Lavação</h3>
                                <h2>4,9 * 25Km * 65min</h2>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur natus tempora, vitae enim officiis vero! Illum nam obcaecati quo doloremque aspernatur ipsam ratione officia, accusantium sequi dignissimos adipisci recusandae dolor!</p>
                            </div>
                            <div className="bg-carro-env bg-no-repeat bg-center w-1/6 h-60 bg-cover rounded-xl mb-2"></div>
                            <div className="w-1/6">
                                <h3 className="text-2xl font-semibold">Top Car Lavação</h3>
                                <h2>4,9 * 25Km * 65min</h2>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur natus tempora, vitae enim officiis vero! Illum nam obcaecati quo doloremque aspernatur ipsam ratione officia, accusantium sequi dignissimos adipisci recusandae dolor!</p>
                            </div>
                            <div className="bg-carro-env bg-no-repeat bg-center w-1/6 h-60 bg-cover rounded-xl mb-2"></div>
                            <div className="w-1/6">
                                <h3 className="text-2xl font-semibold">Top Car Lavação</h3>
                                <h2>4,9 * 25Km * 65min</h2>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur natus tempora, vitae enim officiis vero! Illum nam obcaecati quo doloremque aspernatur ipsam ratione officia, accusantium sequi dignissimos adipisci recusandae dolor!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}