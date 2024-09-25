document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const producto = document.getElementById("producto").value;
    const empaque = document.getElementById("empaque").value;

    let resultado = `<h3>Hola ${nombre}, aquí está tu evaluación:</h3>`;

    switch (empaque) {
        case 'aluminio':
            resultado += `
                <p>El aluminio es reciclable y menos contaminante.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Reciclar en contenedores de aluminio.</li>
                    <li>Enjuagar antes de desechar.</li>
                </ul>
            `;
            break;
        case 'papel':
            resultado += `
                <p>El papel es reciclable y biodegradable.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Reciclar en contenedores de papel.</li>
                    <li>Evitar el papel plastificado.</li>
                </ul>
            `;
            break;
        case 'plastico':
            resultado += `
                <p>El plástico puede ser contaminante si no se desecha adecuadamente.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Reciclable en su mayoría. Lavar y separar según el tipo.</li>
                    <li>Evitar el uso de plásticos de un solo uso.</li>
                </ul>
            `;
            break;
        case 'vidrio':
            resultado += `
                <p>El vidrio es reciclable y menos contaminante.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Reciclar en contenedores de vidrio.</li>
                    <li>Lavar antes de desechar.</li>
                </ul>
            `;
            break;
        case 'carton':
            resultado += `
                <p>El cartón es reciclable y biodegradable.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Reciclar en contenedores de cartón.</li>
                    <li>Aplanar cajas para ahorrar espacio.</li>
                </ul>
            `;
            break;
        case 'bolsas':
            resultado += `
                <p>Las bolsas pueden ser problemáticas si son de plástico.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Usar bolsas reutilizables.</li>
                    <li>Reciclar si es posible.</li>
                </ul>
            `;
            break;
        case 'compostables':
            resultado += `
                <p>Los empaques compostables son una buena opción.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Compostar en casa si es posible.</li>
                    <li>Seguir las indicaciones de compostaje.</li>
                </ul>
            `;
            break;
        case 'treta-pop':
            resultado += `
                <p>Los envases Tetra-Pop son reciclables pero requieren un proceso especial.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Verificar si hay puntos de reciclaje en tu área.</li>
                    <li>Enjuagar antes de desechar.</li>
                </ul>
            `;
            break;
        case 'latas':
            resultado += `
                <p>Las latas son reciclables y menos contaminantes.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Reciclar en contenedores de metal.</li>
                    <li>Enjuagar para evitar residuos.</li>
                </ul>
            `;
            break;
        case 'bolsa_aluminio_plastificada':
            resultado += `
                <p>Las bolsas de aluminio plastificadas pueden ser difíciles de reciclar.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Consultar indicaciones locales de reciclaje.</li>
                    <li>Considerar alternativas más sostenibles.</li>
                </ul>
            `;
            break;
        case 'otro':
            resultado += `
                <p>Consulta las instrucciones de desecho para tu empaque específico.</p>
                <h4>Recomendaciones:</h4>
                <ul>
                    <li>Investigar sobre la reciclabilidad del material.</li>
                </ul>
            `;
            break;
        default:
            resultado += '<p>Por favor, selecciona un tipo de empaque.</p>';
    }

    document.getElementById("resultado").innerHTML = resultado;
});
