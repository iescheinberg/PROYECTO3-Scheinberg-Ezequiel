import { useEffect } from "react";
import { useState } from "react";

import './Css/historial.css'

export default function Historial() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("savingData")) || [];
        setData(data);
    }, []);

    function Eliminar(id) {
        const nuevoSavingData = [...data];
        nuevoSavingData.splice(id, 1);
        setData(nuevoSavingData);

        localStorage.setItem("savingData", JSON.stringify(nuevoSavingData));
    }

    return (
        <div>
            {" "}
            <h1 className="center separator">Historial 📋</h1>
            <div className="center dvi-cotizador">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros<sup>2</sup></th>
                            <th>Póliza mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, id) => (
                            <tr key={id}>
                                <td>{data.fecha}</td>
                                <td>{data.tipoPropiedad}</td>
                                <td>{data.tipoUbicacion}</td>
                                <td>{data.metros2}</td>
                                <td>{data.poliza}</td>
                                <td>
                                    <button onClick={() => Eliminar(id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="center separator">
                    <a href="/">
                        <button className="button button-outline">Volver</button>
                    </a>
                </div>
            </div>
        </div>
    );
}