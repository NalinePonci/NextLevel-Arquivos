import React from 'react';

interface HeaderProps {
    title?: string;
    //com o  ? é nao obrigatorio, sem nao é
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;