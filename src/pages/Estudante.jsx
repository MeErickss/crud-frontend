import { Sidebar } from "../components/Sidebar";
import { EstudanteC } from "../components/EstudanteC"


export function Estudante() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-grow bg-gray-50">
                <header className="flex w-full justify-between items-center px-4 py-2 bg-gray-100 shadow">
                    <button className="p-2">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z"
                                fill="#C4C4C4"
                            />
                        </svg>
                    </button>

                    <div className="relative flex-1 mx-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border rounded pl-3 pr-10 py-1"
                        />
                        <svg
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.9043 13.1687L10.377 9.64141C10.3141 9.57852 10.232 9.5457 10.1445 9.5457H9.86289C10.8008 8.53125 11.375 7.17773 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.17773 11.375 8.53125 10.8008 9.5457 9.86562V10.1445C9.5457 10.232 9.58125 10.3141 9.64141 10.377L13.1687 13.9043C13.2973 14.0328 13.5051 14.0328 13.6336 13.9043L13.9043 13.6336C14.0328 13.5051 14.0328 13.2973 13.9043 13.1687Z"
                                fill="#C4C4C4"
                            />
                        </svg>
                    </div>

                    <button className="p-2">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 18C9.98828 18 10.7812 17.207 10.7812 16.2188H7.21875C7.21875 17.207 8.01172 18 9 18ZM15.2812 13.5938V8.25C15.2812 5.53125 13.6582 3.36523 11.25 2.71094V2.25C11.25 1.25391 10.4961 0.5 9.5 0.5C8.50391 0.5 7.75 1.25391 7.75 2.25V2.71094C5.3418 3.36523 3.71875 5.53125 3.71875 8.25V13.5938L1.96875 15.3438C1.47656 15.8359 1.83594 16.7188 2.53125 16.7188H15.4688C16.1641 16.7188 16.5234 15.8359 16.0312 15.3438L15.2812 13.5938Z"
                                fill="#C4C4C4"
                            />
                        </svg>
                    </button>
                </header>
                <main className="p-10">
                    <article className="flex justify-between">
                        <h1 className="text-3xl"><strong>Lista de Estudantes</strong></h1>
                        <button className=" bg-yellow-500 rounded-lg p-4 text-white"><strong>ADICIONAR NOVO ESTUDANTE</strong></button>
                    </article>
                    <div className="flex flex-wrap justify-center items-center p-2">
                        <div className="flex w-11/12 justify-between text-sm mb-10">
                            <span></span>
                            <span></span>
                            <span>Nome</span>
                            <span>Email</span>
                            <span>Telefone</span>
                            <span>Numero</span>
                            <span>Numero de Inscrição</span>
                            <span>Data</span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="flex flex-wrap w-11/12 h-16">
                            <EstudanteC></EstudanteC>
                            <EstudanteC></EstudanteC>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}