export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUrl = window.location.origin + '/';
const clientId = 'a64df17d1ace4686997ba11e2b1559de';

/**
 * You can read more about Spotify scopes at https://developer.spotify.com/documentation/general/guides/scopes/
 */
// const scopes = [
//     'user-read-currently-playing',
//     'user-read-recently-played',
//     'user-read-playback-state',
//     'user-top-read',
//     'user-modify-playback-state'
// ];

// ESTAMOS AGREGANDO LOS SCOPES MANUALMENTE USANDO %20 EN loginUrl

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user-top-read%20user-read-recently-played%20user-read-private%20user-read-email&response_type=token&show_dialog=true&state=123`;

export const getAccessTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
        }, {});
};