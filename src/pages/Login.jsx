import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate(); // Hook para navegação no React Router

    const verifica = () => {
        const email = document.querySelector("[name='email']").value;
        const senha = document.querySelector("[name='senha']").value;

        // if (email === "admin@gmail.com" && senha === "admin") {
        //     navigate("/home"); // Navega para a rota "/home"
        // } else {
        //     alert("Credenciais inválidas. Tente novamente.");
        // }
        navigate("/home"); // Navega para a rota "/home"
    };

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
                            name="email" // Adicionado o atributo name
                        />
                    </div>

                    <div className="w-3/4 text-left">
                        <label className="block mb-1">Password:</label>
                        <input
                            className="w-full h-12 px-2 border-2 rounded focus:outline-none"
                            type="password"
                            placeholder="Entre com sua senha..."
                            name="senha" // Adicionado o atributo name
                        />
                    </div>
                </main>

                <footer className="w-full">
                    <button
                        onClick={verifica} // Adicionado o evento onClick
                        className="w-3/4 h-12 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400"
                    >
                        <strong>SIGN IN</strong>
                    </button>
                </footer>
            </div>
        </div>
    );
}
