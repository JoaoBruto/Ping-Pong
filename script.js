const canvasEL = document.querySelector("canvas")
        const canvasCTX = canvasEL.getContext("2d") // getContext, pega o contexto do
        const linewidht = 15
        gapX = 10

         // desenhando o campo
        const field = {
            w: window.innerWidth, // largura
            h: window.innerHeight, // altura
            draw: function() {
                canvasCTX.fillStyle = '#286047'
                canvasCTX.fillRect(0, 0, this.w, this.h) // Definir o tamanho do retângulo (x,y,largura,altura). Precisa nessa ordem: Largura e depois altura para não dar erro
            },
        }

        const line = {
            w: 15,
            h: field.h,
            draw: function() {
                // linha central
            canvasCTX.fillStyle = '#ffff' // cor branca para a linha    
            canvasCTX.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h)
            },
        }

        const leftPaddle = { // Raquete esquerda 
            x: gapX,
            y: 100,
            w: line.w,
            h: 200,
            draw: function () {
                canvasCTX.fillStyle = '#ffff'
                canvasCTX.fillRect(this.x, this.y, this.w, this.h)
            },
        }

        const rightPaddle = {
            x: field.w - line.w - gapX,
            y: 100,
            w: line.w,
            h: 200,
            draw: function () {
                canvasCTX.fillStyle = '#ffff'
                canvasCTX.fillRect(this.x, this.y, this.w, this.h)
            },
        }
            
        

        function setup() {
            canvasEL.width =  field.w
            canvasEL.height = field.h
        }

        function draw() {
            field.draw()
            line.draw()
            leftPaddle.draw()
            rightPaddle.draw()
            
            // linha central
            canvasCTX.fillStyle = '#ffff' // cor branca para a linha    
            canvasCTX.fillRect(window.innerWidth / 2 - linewidht / 2, 0, linewidht, window.innerHeight)  
            

            // fazendo a bolinha
            canvasCTX.fillStyle = '#ffff' // cor branca pra bolinha
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