function contar()
    {let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) 
        {res.innerHTML = 'Impossível contar.'
        /*window.alert('[Erro] faltam dados.')*/}

        else 
        {res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0)
            {window.alert('Passo invávlido. Considerando Passo 1.')
            p = 1 }
        if (1 < f) 
            {/*Contagem crescente.*/
            for (let c = 1; c <= f; c += p )
                {res.innerHTML += ` ${c} \u{1F449}`}}
        else 
            {/*Contagem regressiva.*/
            for (let c = 1; c >= f; c -= p) 
                {res.innerHTML += `${c} \u{1F449}`}}
            res.innerHTML += `\u{1F3C1}`}}
            
//Dentro das parênteses do "get elements by id", as aspas podem ser simples ou compostas.