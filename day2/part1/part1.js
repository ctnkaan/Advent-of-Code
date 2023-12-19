const fs = require('fs');


const solution = (filePath) => {
    const lines = fs.readFileSync(filePath, 'utf-8').trim().split('\n')
    let sum = 0

    lines.map((line, index) => {
        const games = line.split(':')[1].split(';').map((game) => game.split(',').map((singleCube) => singleCube.trim().split(' ')))

        const isGameImpossible = games.map((plays) => {
            let red = 12, green = 13, blue = 14;


           plays.map((play) => {
                if (play[1] === 'red') 
                    red -= parseInt(play[0])
                else if (play[1] === 'green')
                    green -= parseInt(play[0])
                else
                    blue -= parseInt(play[0])
            })
            if (red < 0 || blue < 0 || green < 0) {
                return true 
            }
            return false 
        })
            if (!isGameImpossible.includes(true))
                sum += index+1
    })
   
    

    console.log('ANSWER: ', sum);
}


solution('../input.txt')