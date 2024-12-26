import React, { useState, useRef } from 'react';
import Button from './Button';
import Input from './Input';

const FormAuthentication = () => {

    // Referenze per i campi del form
    const emailRef = useRef();
    const passwordRef = useRef();

    // Stato per gli errori
    const [error, setError] = useState("");

    // Funzione per gestire il submit del form
    const handleSubmit = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Validazione semplice
        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        setError("");

        // Simula una chiamata API (sostituisci con la tua logica)
        console.log("Form data submitted:", { email, password });
        alert("Form submitted successfully!");
    };

    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
                <div className="flex justify-center mx-auto">
                    <img
                        className="w-auto h-7 sm:h-8"
                        src="https://merakiui.com/images/logo.svg"
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