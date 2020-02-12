import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'love', id: 1},
        {title: 'Hosana', id: 2},
        {title: 'God Loves the world', id: 3},
        {title: 'Joy to the world', id: 4}
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuid()}])
    }
    useEffect(() => {
        console.log('useEffect hook ran', songs)
    }, [songs])
    useEffect(() => {
        console.log('useEffect hook ran', age)
    }, [age])
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return <li key={song.id}>{song.title}</li>
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>add years {age}</button>
        </div>
     );
}
 
export default SongList;