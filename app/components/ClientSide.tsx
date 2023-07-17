'use client';

import { useEffect, useState } from "react";

interface ClientSideProps {
    children: React.ReactNode
}

const ClientSide: React.FC<ClientSideProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    };

    return (
        <>
            {children}
        </>
    )
}

export default ClientSide