
export function generarURI(codigo){

    let uri=`https://api.spotify.com/v1/artists/${codigo}/top-tracks?market=US`
    
    return(uri)
}