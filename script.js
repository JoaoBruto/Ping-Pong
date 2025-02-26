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
            canvasCTX.fillStyle = "#286047"
            canvasCTX.fillRect(0, 0, window.innerWidth, window.innerHeight) // Definir o tamanho do retângulo (x,y,largura,altura). Precisa nessa ordem: Largura e depois altura para não dar erro
            canvasCTX.fillStyle = '#ffff'
            const x = window.innerWidth / 2 - linewidht / 2
            const y = 0
            const w = linewidht
            const h = window.innerHeight

            canvasCTX.fillRect(x, y, w, h)
        }

setup()
draw()