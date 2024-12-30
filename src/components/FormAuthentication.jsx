import React, { useState, useRef } from 'react';
import Button from '../ui-component/Button';
import Input from '../ui-component/Input';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/authenticationService";

const FormAuthentication = () => {

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const user = { email, password };

        // Validazione
        if (!email || !password) {
            setError("All fields are required.");
            return;
        }
        setError("");

        try {
            // Chiamata al backend con loginService
            const response = await loginUser(user);
            console.log(response)

            // Controlla se la risposta è ok (status 200)
            if (response.status === 200) {
                const result = await response.json();  // Converte la risposta in JSON
                console.log("Result:", result);

                // Se login ha successo, naviga alla rotta /loginOK
                if (result.success) {
                    navigate("/home");
                } else {
                    setError(`Errore: ${result.message}`);
                }
            } else {
                // Se lo status non è 200, gestisci l'errore
                console.log("Se lo status non è 200, gestisci l'errore")
                const errorResult = await response.json();
                setError(`Errore: ${errorResult.message}`);

            }
        } catch (error) {
            // Gestisci eventuali errori di rete o altri errori
            console.error("Errore:", error);
            setError(error.message)
        }
    };


    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
                <div className="flex justify-center mx-auto">
                    <img
                        className="w-auto h-16 sm:h-"
                        src="src/assets/your-pizza-logo.png" 
                        alt="Logo" 
                    />
                </div>
                <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                    Welcome Back
                </h3>
                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                    Login or create account
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="w-full mt-4">
                        <Input
                            ref={emailRef}
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                        />
                    </div>
                    <div className="w-full mt-4">
                        <Input
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                        />
                    </div>
                    {error && (
                        <p className="mt-2 text-sm text-red-500">{error}</p>
                    )}
                    <div className="flex items-center justify-between mt-4">
                        <a
                            href="#"
                            className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                        >
                            Forget Password?
                        </a>

                        <Button type="submit">Sign In</Button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">
                    Don't have an account?{" "}
                </span>
                <a
                    href="#"
                    className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
                >
                    Register
                </a>
            </div>
        </div>
    );
};

export default FormAuthentication;