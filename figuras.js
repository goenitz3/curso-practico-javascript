//Variables del cuadradp
const ladoCuadrado      = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado      = ladoCuadrado * ladoCuadrado;

//Variables del Triangulo
const baseTrinagulo = 10;
const alturaTrinagulo = 14;
const ladoHipo = Math.sqrt(Math.pow((baseTrinagulo/2), 2) + Math.pow( alturaTrinagulo, 2));
console.log(`Impresión de lado Hipo ${ladoHipo}`);
const areaTriangulo = (baseTrinagulo * alturaTrinagulo) /2 ;
const perimetroTriangulo = (ladoHipo * 2) + baseTrinagulo;

//Variables del circulo

const radioCirculo = 4;
const perimetroCirculo = ( 2 * Math.PI ) * radioCirculo;
const areaCirculo = Math.PI * Math.pow(radioCirculo, 2);  

console.group('Cadrado');
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado es : ${perimetroCuadrado}cm`);
console.log(`El area del cuadrado es : ${areaCuadrado}cm^2`);
console.groupEnd();

console.group('Triangulo');
console.log(`La Base del Triangulo = ${baseTrinagulo}\n Altura del triangulo = ${alturaTrinagulo}`);
console.log(`El Área del triangulo Isoceles es: ${areaTriangulo} cm2`);
console.log(`El perimetro de un triangulo Isoceles es: ${perimetroTriangulo}`);
console.groupEnd();

console.group('Circulo')
console.log(`El radio del Círculo es = ${radioCirculo}`);
console.log(`El perimetro del cirulo es ${perimetroCirculo}`);
console.log(`El Área del Circulo es: ${areaCirculo}`);
console.groupEnd();

