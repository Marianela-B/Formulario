function mostrarData(){
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(resp => resp.json())
    .then(data => {
        //Escribir función
        console.log(data);
            let campoNombre = document.getElementById("name");
            let campoMail = document.getElementById("email");
            let campoTel = document.getElementById("tel");
            let campoWeb = document.getElementById("web");
            let campoAsunto = document.getElementById("asunto");
            let campoMsj = document.getElementById("msj");
            let divInfo = document.getElementById("container");
                divInfo.innerHTML = `<h1 class = "title">Información formulario</h1>
                                    <p>El nombre es: ${campoNombre.value}</p>
                                    <p>El mail es: ${campoMail.value}</p>
                                    <p>El teléfono es: ${campoTel.value}</p>
                                    <p>El sitio web es:<a href="${campoWeb.value}"> ${campoWeb.value}</a></p>
                                    <p>Asunto: ${campoAsunto.value}</p>
                                    <p>Mensaje: ${campoMsj.value}</p>`
                divInfo.style.alignItems="flex-start"
    });
}
 

        