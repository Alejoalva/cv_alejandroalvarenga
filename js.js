document.getElementById('boton-informacion-personal').addEventListener('click',function(){
    document.getElementById('informacion-personal').style.backgroundColor = 'grey'
    document.getElementById('formacion-academica').style.backgroundColor = 'white'
    document.getElementById('experiencia-laboral').style.backgroundColor = 'white'
    document.getElementById('contacto').style.backgroundColor = 'white'
});

document.getElementById('boton-formacion-academica').addEventListener('click',function(){
    document.getElementById('formacion-academica').style.backgroundColor = 'grey'
    document.getElementById('informacion-personal').style.backgroundColor = 'white'
    document.getElementById('experiencia-laboral').style.backgroundColor = 'white'
    document.getElementById('contacto').style.backgroundColor = 'white'
});

document.getElementById('boton-experiencia-laboral').addEventListener('click',function(){
    document.getElementById('experiencia-laboral').style.backgroundColor = 'grey'
    document.getElementById('informacion-personal').style.backgroundColor = 'white'
    document.getElementById('formacion-academica').style.backgroundColor = 'white'
    document.getElementById('contacto').style.backgroundColor = 'white'
});

document.getElementById('boton-contacto').addEventListener('click',function(){
    document.getElementById('contacto').style.backgroundColor = 'grey'
    document.getElementById('informacion-personal').style.backgroundColor = 'white'
    document.getElementById('formacion-academica').style.backgroundColor = 'white'
    document.getElementById('experiencia-laboral').style.backgroundColor = 'white'
});
