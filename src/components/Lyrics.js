import React from 'react'
import { Link } from 'react-router-dom'
import {API_KEY, PERMIT_API_HEROKU, MUSIX_MATCH_API} from '../constants/api'
import axios from 'axios'

class Lyrics extends React.Component {

    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount(){
        axios.get(`${PERMIT_API_HEROKU+MUSIX_MATCH_API}track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${API_KEY}`)
        .then((response=> {
            console.log(response.data.message.body.lyrics)
            this.setState({ lyrics:response.data.message.body.lyrics })

            return (axios.get(`${PERMIT_API_HEROKU+MUSIX_MATCH_API}track.get?track_id=${this.props.match.params.id}&apikey=${API_KEY}`)
                        .then(response => {
                            //console.log(response.data)
                            this.setState({ track:response.data.message.body.track })
                        })
            )
        }))
    }

    render() {
        const { track, lyrics } = this.state
        if(
            track === undefined ||
            lyrics === undefined ||
            Object.keys(track).length === 0 ||
            Object.keys(lyrics).length === 0
        ){
            return <h1>Cargando...</h1>
        }else{
            return (<>
                <div className="container">
                <Link to={'/Home'} className="button is-link">Regresar</Link>
                <br/>
                <br/>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <article class="tile is-child box is-danger">
                                <p class="title">{track.track_name} - {track.artist_name}</p>
                                <p class="subtitle"></p>
                                <div class="content">
                                {lyrics.lyrics_body}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                    
                </div>
                
            </>
            )
        }
    }
}

export default Lyrics