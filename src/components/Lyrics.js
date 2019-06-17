import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

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
            
            this.setState({ lyrics:response.data.message.body.lyrics })

            return (axios.get(`${PERMIT_API_HEROKU+MUSIX_MATCH_API}track.get?track_id=${this.props.match.params.id}&apikey=${API_KEY}`)
                        .then(response => {
                            
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
            return (<>
            <div className="container">
                <div className="centrar">
                    <Loader/>                    
                </div>                
            </div>            
            </>
            )
        }else{            
            return (<>
                <div className="container">
                    <br/>
                <Link to={'/Home'} className="button is-link is-outlined"><i className="fas fa-undo"></i> Regresar</Link>
                <br/>
                <br/>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <article className="tile is-child box is-danger">
                                <p className="title">{track.track_name} - {track.artist_name}</p>
                                <p className="subtitle"></p>
                                <div className="card">
                                <div className="card-content">
                                    <p className="title">
                                    {                                          
                                      lyrics.lyrics_body.replace(/<[^>]+>/g, 'hola' )
                                    }
                                    </p>                                    
                                </div>
                                <footer className="card-footer">                                    
                                    <p className="card-footer-item">
                                    <span>
                                        Your Letric Now!
                                    </span>
                                    </p>
                                </footer>
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