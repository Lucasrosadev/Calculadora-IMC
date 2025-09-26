function somar() {
           var tn1 = window.document.getElementById('txtn1')
           var tn2 = window.document.querySelector('input#txtn2') /* querySelector é uma segunda forma de fazer */
           var res = window.document.getElementById('resposta')

           var n1 = Number(tn1.value)
           var n2 = Number(tn2.value)

           //calcular IMC
           var imc = n1 / (n2 **2)

           res.innerHTML = `Seu IMC é ${imc.toFixed(2)} . `

           if (imc < 18.5) {
              res.innerHTML += "Abaixo do peso!";
              res.style.color = " rgb(71, 212, 236)";
           } else if (imc < 25) {
              res.innerHTML += "Peso normal.";
             res.style.color = "rgba(4, 146, 4, 1)";
           } else if (imc < 30) {
              res.innerHTML += "Sobrepeso.";
              res.style.color = "rgb(247, 97, 10)";
           } else {
              res.innerHTML += "Obesidade.";
              res.style.color = "rgb(255, 0, 0)";
           }

        }