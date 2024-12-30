
import React, { useState } from 'react';
import Button from '../ui-component/Button';

const Navbar = () => {

    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <nav>
                    <div className="w-full flex items-center p-5 justify-between h-[8vh]">
                        {/* Spazio a sinistra per il layout */}
                        <div className="flex-1"></div>

                        {/* Logo centrato */}
                        <div className="flex-1 flex justify-center">
                            <img
                                className="w-auto h-10"
                                src="src/assets/your-pizza-logo.png"
                                alt="Logo"
                            />
                        </div>

                        {/* Button a destra */}
                        <div className="flex-1 flex justify-end">
                            <Button>Sign out</Button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;













