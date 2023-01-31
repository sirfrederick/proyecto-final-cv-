async function consultar() {
    let resultado = await fetch('https://randomuser.me/api/')
                                .then(response => response.json())
                                .then(data => data)
    document.getElementById("telefono").innerHTML = `<i>${resultado.results[0].cell}</i>`
    document.getElementById("email").innerHTML = `<i>${resultado.results[0].email}</i>`
   

    console.log(resultado.results[0])

}
consultar()

