
function insertValue(value) {
    const input = document.getElementById('parametricFunction');
    input.value += value;
}

// Función para limpiar el campo de texto
function clearInput() {
    const input = document.getElementById('parametricFunction');
    input.value = '';
}
function parametricToFunction(func) {
    const [xFunc, yFunc, zFunc] = func.split(',').map(f => f.trim());
    return { 
        x: new Function('t', `return ${xFunc.replace(/(sin|cos)/g, 'Math.$1')}`), 
        y: new Function('t', `return ${yFunc.replace(/(sin|cos)/g, 'Math.$1')}`), 
        z: new Function('t', `return ${zFunc.replace(/(sin|cos)/g, 'Math.$1')}`) 
    };
}

function lengthOfArc(func, tStart, tEnd, n = 1000) {
    const dt = (tEnd - tStart) / n;
    let length = 0;
    for (let i = 0; i < n; i++) {
        const t1 = tStart + i * dt;
        const t2 = tStart + (i + 1) * dt;
        const dx = func.x(t2) - func.x(t1);
        const dy = func.y(t2) - func.y(t1);
        const dz = func.z(t2) - func.z(t1);
        length += Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    return length;
}

function curvature(func, t) {
    const dx = (func.x(t + 0.001) - func.x(t - 0.001)) / 0.002;
    const dy = (func.y(t + 0.001) - func.y(t - 0.001)) / 0.002;
    const dz = (func.z(t + 0.001) - func.z(t - 0.001)) / 0.002;
    const ddx = (func.x(t + 0.001) - 2 * func.x(t) + func.x(t - 0.001)) / (0.001 * 0.001);
    const ddy = (func.y(t + 0.001) - 2 * func.y(t) + func.y(t - 0.001)) / (0.001 * 0.001);
    const ddz = (func.z(t + 0.001) - 2 * func.z(t) + func.z(t - 0.001)) / (0.001 * 0.001);
    return Math.abs(dx * (ddy * ddz - dy * ddx) + dy * (ddx * dz - dx * ddz)) / Math.pow(dx * dx + dy * dy + dz * dz, 1.5);
}

function calculate() {
    const funcInput = document.getElementById('parametricFunction').value;
    const tStart = parseFloat(document.getElementById('tStart').value);
    const tEnd = parseFloat(document.getElementById('tEnd').value);
    const func = parametricToFunction(funcInput);

    const arcLength = lengthOfArc(func, tStart, tEnd, 10000); // Aumenta n aquí
    const curvatureValue = curvature(func, (tStart + tEnd) / 2); 
    document.getElementById('output').innerText = `Longitud de arco: ${arcLength.toFixed(2)}\nCurvatura en t=${(tStart + tEnd) / 2}: ${curvatureValue.toFixed(2)}`;

    drawGraph(func, tStart, tEnd);
}

function drawGraph(func, tStart, tEnd) {
    const x = [];
    const y = [];
    const z = [];
    
    for (let t = tStart; t <= tEnd; t += (tEnd - tStart) / 100) {
        x.push(func.x(t));
        y.push(func.y(t));
        z.push(func.z(t));
    }

    const trace = {
        x: x,
        y: y,
        z: z,
        mode: 'lines',
        type: 'scatter3d',
        line: { width: 4, color: 'blue' }
    };

    const layout = {
        title: 'Gráfica 3D de la función parametrizada',
        scene: {
            xaxis: { title: 'X' },
            yaxis: { title: 'Y' },
            zaxis: { title: 'Z' }
        }
    };

    Plotly.newPlot('graphContainer', [trace], layout);
}
