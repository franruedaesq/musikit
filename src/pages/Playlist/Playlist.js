import React, { useEffect, useState }  from 'react';
import './Playlist.scss';
import { usePalette } from 'react-palette'
import {useFetchSpotify} from '../../utilities/utils'
import { useParams } from "react-router-dom";
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import Container from '../../components/Container/Container';
import SideMenu from '../../components/SideMenu/SideMenu';
import PlaylistContainer from '../../components/PlaylistContainer/PlaylistContainer';
import PlaylistTable from '../../components/PlaylistTable/PlaylistTable';
import PlaylistTableRow from '../../components/PlaylistTableRow/PlaylistTableRow';

const Playlist = () => {

    let token = localStorage.getItem('token')
    let { id } = useParams();
    const playlists = useFetchSpotify(`https://api.spotify.com/v1/playlists/${id}`, token)
    const playlistsTracks = useFetchSpotify(`https://api.spotify.com/v1/playlists/${id}/tracks`, token)
    const [playlistData, setPlaylistData] = useState({})
    const [playlistTracks, setPlaylistTracks] = useState([])
    const [playlistTracksRow, setPlaylistTracksRow] = useState([])
    
    useEffect(() => {
        if(playlists.data) {
            setPlaylistData(playlists.data)
            setImage_url(playlists.data.images[0].url)
        }
    },[playlists.loading])
    const [image_url, setImage_url] = useState('')
    const { data, loading, error } = usePalette(image_url)

    useEffect(() => {
        console.log('q verga')
        try{
            console.log('q verga')
            console.log(playlistsTracks)
            const {items} = playlistsTracks.data
            setPlaylistTracks(items)
            const playlistrow = generaetePlaylistTableRow(playlistTracks)
            console.log(playlistrow)
            setPlaylistTracksRow(playlistrow)
            console.log(playlistTracksRow)
        } catch(error) {
            console.log(error)
        }
    }, [])



    const generaetePlaylistTableRow = (arrTracks) => {
        const row = arrTracks.map((track, index) => {
            // console.log(track.track)
            // const{track_number} = track
            const {name, duration_ms, album, artists} = track.track
            return <PlaylistTableRow key={index} artists={artists[0].name} number={track.track_number} title={name} album={album.name} added_at={track.added_at} duratin={duration_ms} />
        })

        return row
    }

    return (
        <Container>
            <SideMenu/>
            <PlaylistContainer>
                {playlistData.tracks ? 
                <PlaylistHeader 
                color={data.lightVibrant} 
                img_url={image_url} 
                name={playlistData.name} 
                tracks_total={playlistData.tracks.total}
                owner={playlistData.owner.display_name}
                description={playlistData.description}
                /> : null}
                <PlaylistTable>
                    {playlistTracksRow}
                </PlaylistTable>
            </PlaylistContainer>
        </Container>
    );
}

export default Playlist;
