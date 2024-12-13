import { NavLink } from "react-router-dom";

export function Login() {


    return (
        <div className="flex items-center justify-center w-screen h-screen bg-yellow-500">
            <div className="flex flex-wrap w-1/4 h-1/2 rounded-lg justify-center items-center text-center bg-white">
                <article className="w-full h-24">
                    <h1 className="w-full border-l-yellow-400 text-3xl mb-8">
                        <strong>CRUD OPERATIONS</strong>
                    </h1>
                    <h3 className="w-full text-2xl">
                        <strong>SIGN IN</strong>
                    </h3>
                    <p className="w-full text-gray-500">
                        Entre com suas credenciais para acessar sua conta
                    </p>
                </article>

                <main className="flex flex-wrap justify-center items-start gap-8 w-full">
                    <div className="w-3/4 text-left">
                        <label className="block mb-1">Email:</label>
                        <input
                            className="w-full h-12 px-2 border-2 rounded focus:outline-none"
                            type="text"
                            placeholder="Entre com seu email..."
                        />
                    </div>

                    <div className="w-3/4 text-left">
                        <label className="block mb-1">Password:</label>
                        <input
                            className="w-full h-12 px-2 border-2 rounded focus:outline-none"
                            type="password"
                            placeholder="Entre com sua senha..."

                        />
                    </div>
                </main>

                <footer className="w-full">
                    <NavLink className="w-3/4 h-12 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400"
                        to="/home"
                    >
                        <strong>SIGN IN</strong>
                    </NavLink>
                </footer>
            </div>
        </div>
    );
}
