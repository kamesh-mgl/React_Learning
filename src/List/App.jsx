import List from "./List";
import './app.css'

export default function App() {

    const anime = [
        { id: 1, name: "One Piece" },
        { id: 2, name: "Naruto" },
        { id: 3, name: "Bleach" },
        { id: 4, name: "Demon Slayer" },
        { id: 5, name: "Attack on Titan" }
    ]
    const korean = [
        { id: 6, name: "Crash landing on you" },
        { id: 7, name: "Squic game" },
        { id: 8, name: "Snow drop" },
        { id: 9, name: "Death game" },
        { id: 10, name: "What's wrong with secretary Kim" }
    ]

    return (

        <div className="container">
            {anime.length > 0 && <List items={anime} category="Anime"/>}
            {korean.length > 0 && <List items={korean} category="Korean" />}
        </div>
    );
}