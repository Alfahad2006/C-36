class Player {
    constructor(){

    }

    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on('value', function(data){
            playerCount=data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(playername){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({
            name:playername
        })
    }
}