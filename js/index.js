/* 2. ESTUDIANTE-B
Se tiene de varios estudiantes su nombre, semestre y nota.
También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10. 
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los nombres de los estudiantes aprobados.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: nombresDeAprobados.
Parámetros: estudiantes (array de objetos estudiante).
Retorno: array de strings, con los nombres de los estudiantes aprobados. 
*/
let estudiante = [
    {nombre: "laura", semestre: 3, nota: 18},
    {nombre: "Luis", semestre: 5, nota: 14},
    {nombre: "martha", semestre: 4, nota: 16},
    {nombre: "lucia", semestre: 5, nota: 8},
];
let nombresDeAprobados = (estudiante, nota) => {
    let estudianteFiltrado = [];
    estudiante. array.forEach((estudiante) => {
        if (estudiante.nota== nota && nota>10) estudianteFiltrado.push(estudiante);
    });
    return estudianteFiltrado;
}
let salida = document.getElementById("salida");
let estudianteApr = nombresDeAprobados(estudiante, nota);
salida.innerHTML = `Estudiantes Aprobados :<br> `;
estudianteApr.forEach((estudiante) => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} - nota: ${estudiante.nota} `
})   