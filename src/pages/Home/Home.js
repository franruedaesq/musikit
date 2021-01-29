import React, { useEffect, useState } from 'react';
import './Home.scss'
import Container from '../../components/Container/Container'
import ListCointainer from '../../components/ListCointainer/ListCointainer';
import HomeContainer from '../../components/HomeContainer/HomeContainer';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';
import {useFetchSpotify} from '../../utilities/utils'
import SideMenu from '../../components/SideMenu/SideMenu';
import { Link } from "react-router-dom";


const Home = () => {
    let token = localStorage.getItem('token')
    const artists = useFetchSpotify('https://api.spotify.com/v1/me/top/artists', token)
    const playlists = useFetchSpotify('https://api.spotify.com/v1/me/playlists', token)
    const pop = useFetchSpotify('https://api.spotify.com/v1/browse/categories/pop/playlists', token)
    const topLists = useFetchSpotify("https://api.spotify.com/v1/browse/categories/toplists/playlists", token)
    const categories = useFetchSpotify('https://api.spotify.com/v1/browse/categories', token)




    const [playlistCards, setPlaylistCards] = useState([])
    const [popCards, setPopCards] = useState([])
    const [topListsCards, setTopListsCards] = useState([])

    useEffect(() => {
        if(playlists.data) {
            const cards = generatePlaylistCards(playlists.data.items)
            setPlaylistCards(cards)
        }
        if(pop.data) {
            const cards = generatePlaylistCards(pop.data.playlists.items)
            setPopCards(cards)
            console.log(pop.data)
        }

        if(topLists.data) {
            console.log(topLists.data)
            const cards = generatePlaylistCards(topLists.data.playlists.items)
            setTopListsCards(cards)
            }

    },[playlists.loading])

    

    const generatePlaylistCards = (arr) => {
        arr.length = 5;
        const cards = arr.map( playlist => {
            const {name, description, images, id} = playlist
            return (<Link to={`/playlist/${id}`}>
                        <PlaylistCard key={id} name={name} description={description} imageUrl={images[0].url}/>
                    </Link>
                    )
                    
        })
        return cards
    }

    return (
        <>
            <Container>
                <SideMenu/>
                        
                <HomeContainer>
                    <ListCointainer title='Toplists'>
                            {topListsCards}
                    </ListCointainer>
                    <ListCointainer title='Mis Playlists'>
                            {playlistCards}
                    </ListCointainer>
                    <ListCointainer title='Pop'>
                            {popCards}
                    </ListCointainer>
                </HomeContainer>

            </Container>    
        </>
    );
}

export default Home;
