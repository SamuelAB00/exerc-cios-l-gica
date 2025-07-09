//5.9

altura = Number(prompt('Insira sua altura em metros:'));
genero = Number(prompt('Insira seu gênero\n1:Feminino\n2:Masculino'))
resultaF = (62.1 *altura) - 44.7
resultaM = (72.7 *altura) - 58

if (genero ===1) {
    alert(resultaF)
}

else if (genero ===2) {
    alert(resultaM)
}

else {
    alert ("Por grntiliza, insira um valor válido")
}
