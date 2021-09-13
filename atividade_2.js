let ano_evento = 2021
let mes_evento = 10
let dia_evento = 10
//A data do evento será 10/10/2021.
let idade_participante = 19
//A idade pode e deve ser alterada para testes.
let data_atual = [10, 10, 2021] //os campos da lista seguem a seguinte ordem: dia/mês/ano.
//Para teste a data atual para o cadastro pode e deve ser alterada.
let n_participantes = 12
//Para teste o número de participantes pode e deve ser alterado.
let requisitos = false //Este valor não pode ser alterdo.
//Os requisitos iniciais(data atual e idade do participante) devem ser conferidos e até lá o valor da desta variável deve continuar em "false". 
if (data_atual[2] > ano_evento){
    if (idade_participante < 18){
        console.log('Cadastro não permitido! Idade insuficiente')
    } else{
    console.log(`LISTA DE PARTICIPANTES:${n_participantes} pessoas inscritas`)
n_participantes = n_participantes + 1
requisitos = true
}
} else if (data_atual[2] != ano_evento){
    console.log('Cadastro não permitido! Data inválida.')
} else if (data_atual[1] > mes_evento){
    if (idade_participante < 18){
        console.log('Cadastro não permitido! Idade insuficiente')
    } else{
    console.log(`LISTA DE PARTICIPANTES:${n_participantes} pessoas inscritas`)
n_participantes = n_participantes + 1
requisitos = true
    }
} else if (data_atual[1] != mes_evento){
    console.log('Cadastro não permitido! Data inválida.')
} else if (data_atual[0] > dia_evento){
    if (idade_participante < 18){
        console.log('Cadastro não permitido! Idade insuficiente')
    } else{
    console.log(`LISTA DE PARTICIPANTES:${n_participantes} pessoas inscritas`)
n_participantes = n_participantes + 1
requisitos = true
}
} else if (data_atual[0] != dia_evento){
    console.log('Cadastro não permitido! Data inválida.')
} else if (idade_participante < 18){
    console.log('Cadastro não permitido! Idade insuficiente')
}else{
    console.log(`LISTA DE PARTICIPANTES:${n_participantes} pessoas inscritas`)
n_participantes = n_participantes + 1
requisitos = true
}

/*Aqui foi mostrada a lista de participantes até o momento e depois será contabilizado mais um paricipante.
 Além de informar que os requisitos iniciais foram aprovados.*/
if (requisitos == true){
if (n_participantes < 100){
    console.log('Cadastro permitido!')
} else{
    console.log('Cadastro não permitido! Número de participantes excedido!')
}
}
/*Por fim, com os requisitos iniciais aprovados o sistema analisará se é possível o cadastro de mais uma pessoa,
já que o evento tem o limite de 100 pessoas.*/