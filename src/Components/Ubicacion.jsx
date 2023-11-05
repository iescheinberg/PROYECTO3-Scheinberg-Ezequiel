
function Ubicacion({ ubicaciones, handleUbiChange }) {
    return (
        <div>
            <label htmlFor="ubicacion">Seleccione ubicación:</label>
            <select defaultValue="" id="ubicacion" onChange={handleUbiChange}>
                <option value="">-</option>
                {ubicaciones.map((itemCat) => (
                    <option key={itemCat.tipo} value={itemCat.factor}>
                        {itemCat.tipo}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Ubicacion