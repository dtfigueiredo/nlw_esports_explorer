import { gamesData, streamersData } from "./utils/lists.js"

//importing ul's
const games = document.getElementById('games-list')
const streamers = document.getElementById('streamers-list')

//creating games li's
const createGamesHtml = (game) => {
    const html = `<li>
                    <a target="_blank" rel="noreferrer noopener"
                        href=${game.url}
                        class="link games-link">
                        <img class="game-cover" src=${game.imgUrl}
                        alt="capa do jogo ${game.name}">
                    </a>
                </li>`

    return html
}

const renderGamesHtml = (gamesData) => {
    gamesData.forEach(game => {
        const li = createGamesHtml(game)
        games.innerHTML += li
    })

    return games
}

renderGamesHtml(gamesData)
//

//creating streamers li's
const createStreamersHtml = (streamer) => {
    const html = `<li>
                    <a target="_blank" rel="noreferrer noopener"
                        href=${streamer.url}
                        class="link">
                        <img class="streamer-cover" src=${streamer.imgUrl} 
                        alt="logo do canal ${streamer.url.split('/')[3]}">
                    </a>
                </li>`

    return html
}

const renderStreamerHtml = (streamersData) => {
    streamersData.forEach(game => {
        const li = createStreamersHtml(game)
        streamers.innerHTML += li
    })

    return streamers
}

renderStreamerHtml(streamersData)