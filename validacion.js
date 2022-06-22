function validarDatos(){
    window.event.preventDefault();

    if(document.formulario.nombre.value==""){
        alert("Campo Nombre Obligatorio")
        document.formulario.nombre.focus();
    }
    else if(document.formulario.email.value==""){
        alert("Campo E-mail Obligatorio")
        document.formulario.email.focus();
    }
    else if(document.formulario.email.value.indexOf("@")==-1 || 
        document.formulario.email.value.indexOf(".")==-1 ){
        alert("El E-mail es invalido, sugerencia: xxxxx@xxxxx.xxx")
        document.formulario.email.focus();
    }
    else if(document.formulario.asunto.value==""){
        alert("Campo Asunto Obligatorio")
        document.formulario.asunto.focus();
    }
    else if(document.formulario.mensaje.value==""){
        alert("Campo Mensaje Obligatorio y debe contener máximo 500 caracteres")
        document.formulario.mensaje.focus(); 
    }

    else if(document.formulario.mensaje.value.length <= 500){
        
    }else{
        alert("Mensaje demasiado extenso")
        document.formulario.mensaje.focus(); 
    }
    
}

document.querySelector("form").addEventListener("submit",validarDatos); 