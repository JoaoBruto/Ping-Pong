const canvasEL = document.querySelector("canvas")
        const canvasCTX = canvasEL.getContext("2d") // getContext, pega o contexto do
        const linewidht = 15

        function setup() {
            canvasEL.width = window.innerWidth // Defini que a largura será do tamanho inteiro da janela
            canvasEL.height = window.innerHeight// Defini que a altura será do tamanho inteiro da janela
            canvasCTX.width = window.innerHeight
            canvasCTX.height = window.innerHeight
        }

        function draw() {
            // desenhando o campo
            canvasCTX.fillStyle = "#286047"
            canvasCTX.fillRect(0, 0, window.innerWidth, window.innerHeight) // Definir o tamanho do retângulo (x,y,largura,altura). Precisa nessa ordem: Largura e depois altura para não dar erro
            canvasCTX.fillStyle = '#ffff'

            // linha central
            const x = window.innerWidth / 2 - linewidht / 2
            const y = 0
            const w = linewidht
            const h = window.innerHeight

            canvasCTX.fillRect(x, y, w, h)

            // fazendo a raquete esquerda   
            canvasCTX.fillRect(10, 400, linewidht, 200)

            // raquete direita
            canvasCTX.fillRect(window.innerWidth - linewidht - 10, 120, linewidht, 200)

            // fazendo a bolinha
            canvasCTX.beginPath()
            canvasCTX.arc(200, 300, 20, 0, 2 * Math.PI, false) // Por o JS não tem .fillarc, se usa esses comandos para arrumar do jeito certo (substituindo o .fillarc)
            canvasCTX.fill()

            // fazendo o placar
            canvasCTX.font = 'bold 72px Arial'
            canvasCTX.textAlign = 'center'
            canvasCTX.textBaseline = 'top'
            canvasCTX.fillStyle = '#01341D'
            canvasCTX.fillText('3', window.innerWidth / 4, 50)
            canvasCTX.fillText('4', window.innerWidth / 4 + window.innerWidth / 2, 50)



        }

setup()
draw()