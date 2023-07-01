const bd_juego = [
    {
        id:0,
        pregunta: "¿Cual es el pais mas pequeño del mundo?",
        op0:"Estado Vaticano",
        op1:"Monaco",
        op2:"San Marino",
        op3:"Shangai",
        op4:"Isla Marshall",
        op5:"Tavulu",
        correcta:"0"
    },
    {
        id:1,
        pregunta:"¿En qué año llegó el hombre a la Luna?",
        op0:"1955",
        op1:"1960",
        //la respuesta correcta es op2
        op2:"1969",
        op3:"1970",
        op4:"1964"
    },
    {
        id:2,
        pregunta:"¿Cuál era la ciudad hogar de Marco Polo?",
        op0:"Parma",
        op1:"Roma",
        op2:"Florencia",
        //respuesta venecia
        op3:"Venecia",
    },
    {
        id:3,
        pregunta:"¿En qué año se disolvió la Unión Soviética?",
        //1991 correcta 
        op0:"1991",
        op1:"1992",
        op2:"1990",
        op3:"1989",
    },
    {
        id:4,
        pregunta:"¿Cómo se conocía la Primera Guerra Mundial antes de que estallara la segunda?",
        //Gran guerra correcta 
        op0:"Guerra Mundial",
        op1:"Gran conflicto",
        op2:"Gran Guerra",
        op3:"Guerra de Europa",
    },
    {
        id:5,
        pregunta:"¿Cuál fue el segundo país americano en conseguir la independencia?",
        //Haiticorrecta 
        op0:"Cuba",
        op1:"Haiti",
        op2:"Venezuela",
        op3:"Colombia",
    },
    {
        id:6,
        pregunta:"¿Quién era el emperador de Roma cuando murió Jesús de Nazaret?",
        //Tiberio 
        op0:"Primo septo",
        op1:"Caligula",
        op2:"Tibero",
        op3:"Neron",
    },
    {
        id:7,
        pregunta:"¿Cuál es el río más caudaloso del mundo?",
        //Amazonas 
        op0:"Amazonas",
        op1:"Hodson",
        op2:"Ganges",
        op3:"Yangtze",
    },
    {
        id:8,
        pregunta:"¿Qué país está entre Perú y Colombia?",
        //Ecuador 
        op0:"Panama",
        op1:"Bolivia",
        op2:"Chile",
        op3:"Ecuador",
    },
    {
        id:9,
        pregunta:"¿Dónde se encuentra la Casa Rosada?",
        //Argentina 
        op0:"Chile",
        op1:"Argentina",
        op2:"Uruguay",
        op3:"Ecuador",
    },
    {
        id:10,
        pregunta:"¿Cuál es el país más visitado del mundo?",
        //Francia 
        op0:"Estados Unidos",
        op1:"Alemania",
        op2:"Francia",
        op3:"Inglaterra",
    },
    {
        id:11,
        pregunta:"¿Por cuántos estados está formado Estados Unidos?",
        //50
        op0:"51",
        op1:"50",
        op2:"52",
        op3:"49",
    },
    {
        id:12,
        pregunta:"¿Cuál es el país del mundo con mayor población?",
        //china
        op0:"Japon",
        op1:"India",
        op2:"China",
        op3:"Rusia",
    },
    {
        id:13,
        pregunta:"¿Cuál es la lengua con mas hablantes nativos del mundo?",
        //Chino Mandarin
        op0:"Ingles",
        op1:"Chino Mandarin",
        op2:"Español",
        op3:"Frances",
    },
    {
        id:14,
        pregunta:"¿Con qué nombre firmaba Van Gogh sus obras?",
        //Vincent
        op0:"Van Gogh",
        op1:"Vincent",
        op2:"VVG",
        op3:"VIn Van Gogh",
    },
    {
        id:15,
        pregunta:"¿Cómo se llama el caballo de Don Quijote de la Mancha?",
        //Rocinante
        op0:"Vega",
        op1:"Chapoteador",
        op2:"Rocinante",
        op3:"Roncador",
    },
    {
        id:16,
        pregunta:"¿En qué mes el Sol está más cerca de la Tierra?",
        //Diciembre
        op0:"Marzo",
        op1:"Septiemnbre",
        op2:"Enero",
        op3:"Diciembre",
    },
    {
        id:17,
        pregunta:"De los cinco sentidos, ¿cuál es el que se desarrolla primero?",
        //Olfato
        op0:"Gusto",
        op1:"Vista",
        op2:"Olfato",
        op3:"Tacto",
    },
    {
        id:18,
        pregunta:"¿Cuál es el elemento más abundante de la Tierra?",
        //Hidrogeno
        op0:"Agua",
        op1:"Gas metano",
        op2:"Hidrogeno",
        op3:"Helio",
    },
    {
        id:19,
        pregunta:"¿Cuál es el animal más venenoso del mundo?",
        //Medusa avispa de mar
        op0:"Tarantula",
        op1:"Medusa avispa de mar",
        op2:"Rana venenosa",
        op3:"Mamba negra",
    }
]

//Para guardar respuestas
let respuestas = [];
//cantidad incorrectas
let cantiCorrectas = 0;
//preguntas actuales que deben ser cargadas
let numPregunta = 0;

//cargo una pregunta del json
function cargarPreguntas(){
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id; 
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 +" - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");
    const label1 = creaLabel("0",preguntas.op0);
    const label2 = creaLabel("1",preguntas.op1);
    const label3 = creaLabel("2",preguntas.op2);
    const label4 = creaLabel("3",preguntas.op3);
    const label5 = creaLabel("4",preguntas.op4);
    const label6 = creaLabel("5",preguntas.op5);

    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);
    opciones.appendChild(label4);
    opciones.appendChild(label5);
    opciones.appendChild(label6);

    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);

}
function creaLabel(num, textOpcion){
    const label = document.createElement("label");
    lable.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "selecionar(" +numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = textOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;

}

for(i=0;i <bd_juego.length;i++){
    cargarPreguntas();
    numPregunta++;
}