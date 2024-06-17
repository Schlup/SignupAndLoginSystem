import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Agenda() {
    return (
        //Mobile
        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            {/* Mobile */}
            <div className="flex flex-col h-svh bg-slate-100 overflow-hidden xl:hidden">
                <main className="flex-grow p5">
                    <div className="bg-white h-screen col-span-10 flex-col overflow-y-scroll">
                        <div className="mx-5">
                            <h1 className="text-xl mt-2 text-center">Minha agenda</h1>
                            <div className="grid grid-cols-1 gap-2 mt-10 mb-28">
                                <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                    <h2 className="font-semibold flex">Top Car Lavação</h2>
                                    <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                    <p><span className="font-semibold">Veículo:</span> Carro</p>
                                    <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                    <p><span className="font-semibold">Hora:</span> 16:30</p>
                                    <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                                </div>
                                <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                    <h2 className="font-semibold flex">Top Car Lavação</h2>
                                    <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                    <p><span className="font-semibold">Veículo:</span> Carro</p>
                                    <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                    <p><span className="font-semibold">Hora:</span> 16:30</p>
                                    <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                                </div>
                                <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                    <h2 className="font-semibold flex">Top Car Lavação</h2>
                                    <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                    <p><span className="font-semibold">Veículo:</span> Carro</p>
                                    <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                    <p><span className="font-semibold">Hora:</span> 16:30</p>
                                    <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                                </div>
                                <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                    <h2 className="font-semibold flex">Top Car Lavação</h2>
                                    <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                    <p><span className="font-semibold">Veículo:</span> Carro</p>
                                    <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                    <p><span className="font-semibold">Hora:</span> 16:30</p>
                                    <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                                </div>
                                <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                    <h2 className="font-semibold flex">Top Car Lavação</h2>
                                    <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                    <p><span className="font-semibold">Veículo:</span> Carro</p>
                                    <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                    <p><span className="font-semibold">Hora:</span> 16:30</p>
                                    <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                                </div>
                                <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                    <h2 className="font-semibold flex">Top Car Lavação</h2>
                                    <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                    <p><span className="font-semibold">Veículo:</span> Carro</p>
                                    <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                    <p><span className="font-semibold">Hora:</span> 16:30</p>
                                    <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                                </div>
                                <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                    <h2 className="font-semibold flex">Top Car Lavação</h2>
                                    <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                    <p><span className="font-semibold">Veículo:</span> Carro</p>
                                    <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                    <p><span className="font-semibold">Hora:</span> 16:30</p>
                                    <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                                </div>
                            </div>
                            <button className="grid-span-1 justify-center p-2 bg-gray-200 rounded-lg fixed bottom-16">Histórico de agendamento</button>
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
                    <Link to="/home"><p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><FiHome className="size-6 mr-2" />Principal</p></Link>
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><IoIosSearch className="size-6 mr-2" />Pesquisar</p>
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><IoCalendarOutline className="size-6 mr-2" />Agenda</p>
                    <div className="flex-grow"></div>
                    <p className="flex bg-slate-100 m-2 pl-6 py-2 rounded-md hover:bg-slate-50"><CgProfile className="size-6 mr-2" />Meu Perfil</p>
                </div>

                <div className="bg-white lg:h-screen col-span-10 hidden xl:flex xl:flex-col overflow-y-scroll">
                    <div className="mx-40">
                        <h1 className="font-semibold text-4xl mt-6">Minha agenda</h1>
                        <div className="grid grid-cols-3 gap-6 mt-20">
                            <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                <h2 className="font-semibold flex">Top Car Lavação</h2>
                                <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                <p><span className="font-semibold">Veículo:</span> Carro</p>
                                <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                <p><span className="font-semibold">Hora:</span> 16:30</p>
                                <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                            </div>
                            <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                <h2 className="font-semibold flex">Top Car Lavação</h2>
                                <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                <p><span className="font-semibold">Veículo:</span> Carro</p>
                                <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                <p><span className="font-semibold">Hora:</span> 16:30</p>
                                <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                            </div>
                            <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                <h2 className="font-semibold flex">Top Car Lavação</h2>
                                <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                <p><span className="font-semibold">Veículo:</span> Carro</p>
                                <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                <p><span className="font-semibold">Hora:</span> 16:30</p>
                                <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                            </div>
                            <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                <h2 className="font-semibold flex">Top Car Lavação</h2>
                                <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                <p><span className="font-semibold">Veículo:</span> Carro</p>
                                <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                <p><span className="font-semibold">Hora:</span> 16:30</p>
                                <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                            </div>
                            <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                <h2 className="font-semibold flex">Top Car Lavação</h2>
                                <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                <p><span className="font-semibold">Veículo:</span> Carro</p>
                                <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                <p><span className="font-semibold">Hora:</span> 16:30</p>
                                <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                            </div>
                            <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                <h2 className="font-semibold flex">Top Car Lavação</h2>
                                <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                <p><span className="font-semibold">Veículo:</span> Carro</p>
                                <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                <p><span className="font-semibold">Hora:</span> 16:30</p>
                                <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                            </div>
                            <div className="bg-gray-300 col-span-1 p-2 rounded-lg">
                                <h2 className="font-semibold flex">Top Car Lavação</h2>
                                <p><span className="font-semibold">Serviço:</span> Lavação</p>
                                <p><span className="font-semibold">Veículo:</span> Carro</p>
                                <p><span className="font-semibold">Data:</span> 12/06/2024</p>
                                <p><span className="font-semibold">Hora:</span> 16:30</p>
                                <p><span className="font-semibold">Valor:</span> R$ 150,00</p>
                            </div>

                        </div>

                    </div>
                    <div className="flex-grow"></div>

                    <button className="mx-40 flex justify-center p-2 bg-gray-200 rounded-lg mb-8">Histórico de agendamento</button>
                </div>
            </div>
        </div>

    )
}