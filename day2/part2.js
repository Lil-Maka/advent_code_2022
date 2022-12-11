class Game {
    constructor(gameRoundList, player1, player2) {
        this.matchups = {
            rock: {
                win: 'scissor',
                lose: 'paper',
                draw: "rock",
                value: 1
            },
            paper : {
                win: 'rock',
                lose: 'scissor',
                draw: "paper",
                value: 2
            },
            scissor: {
                win: 'paper',
                lose: 'rock',
                draw: "scissor",
                value: 3
            }
        }

        this.player1 = player1;
        this.player2 = player2;
        this.gameRoundList = gameRoundList.split('\n');

        this.play(this.gameRoundList);
    }

    versus = function(player1Value, player2Value){
        let player1Matchup = this.matchups[player1Value];
        let player2Matchup;
        if(player2Value == "draw") {
            player2Matchup = this.matchups[player1Matchup.draw];
        } else if(player2Value == "win") {
            player2Matchup = this.matchups[player1Matchup.lose];
        } else {
            player2Matchup = this.matchups[player1Matchup.win];
        }
        let player2MatchupValue = player2Matchup.value;

        if(player2Value == "draw") {
            return player2MatchupValue + 3;
        } else if(player2Value == "win") {
            return player2MatchupValue + 6;
        } else if (player2Value == "lose") {
            return player2MatchupValue;
        }
    }

    play = function(gameRoundList){
        gameRoundList.forEach((values) => {
            let valueList = values.split(' ');
            let value1 = valueList[0];
            let value2 = valueList[1];
            let player1Value = this.player1.decryptValue(value1);
            let player2Value = this.player2.decryptValue(value2);
            if(player1Value && player2Value) {
                let roundValue = this.versus(player1Value, player2Value);
                this.player2.setTotalScore(roundValue);
            }
        });

        console.log(this.player2.totalScore);
    }
}


class PlayerManager {
    constructor (playerName, encryptedConfig) {
        this.playerName = playerName;
        this.encryptedConfig = encryptedConfig;

        this.totalScore = 0;
    }

    decryptValue(encryptedValue){
        return this.encryptedConfig[encryptedValue];
    }

    setTotalScore(roundValue) {
        this.totalScore += roundValue;
    }

    get getTotalScore (){
        return this.totalScore;
    }
} 

let player1 = new PlayerManager('player1', {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissor'
});

let player2 = new PlayerManager('player2', {
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win'
});

const dataSample = document.getElementById("test").innerHTML;
// const dataSample = 'A Y\nA Z\nA X\nB X\nA Y\nB Y\nB Y\nA X\nA Z';


let startGame = new Game(dataSample, player1, player2);