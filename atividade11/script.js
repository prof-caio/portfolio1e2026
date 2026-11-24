function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let sec = agora.getSeconds();

    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>`;//lembrando que é CRASE ``

    if(sec >=0 && sec <=10){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>
                            <img src="https://www.estadao.com.br/resizer/v2/5ORCQOP5KBNCDOYQ27O5S4PEZ4.png?quality=80&auth=7c8a5fbc7a247e92868a068f0ec3a1ac6bc18894cf8964615a0aa12bca005202&width=380">`;//lembrando que é CRASE ``
    }
}