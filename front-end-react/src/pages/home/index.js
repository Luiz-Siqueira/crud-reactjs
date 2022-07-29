import './style.css';
import { React } from 'react';
import FormCreate from '../../components/FormCreate'
export default function Home() {

    return (
        <div className="container">
            <h3>Cadastrar Cliente</h3>
            <FormCreate />
        </div>
    );
}

