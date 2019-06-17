import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//crear funcion
    //dividir rating entre 20/
    //convertir a int
    //restar 5 menos resultado de division
// const rating = () => {
//     let star = (this.props.track_rating / 20).parseInt
// }

 class TrackCard extends Component {

    constructor(props){
        super(props)
    }

    render() { 
        const { track_id, track_name, artist_name, album_name, track_rating } = this.props       
        
        return (<>            
            <div className="column is-3">
            <div className="card">
                <section class="hero is-dark">
                    <div class="hero-body">
                        <div class="container">
                        <h1 class="title">
                        <strong><i class="far fa-play-circle"></i> {track_name}</strong>
                        </h1>
                        <h2 class="subtitle">
                        <i class="fas fa-minus"></i><i class="fas fa-angle-double-right"></i> {artist_name}.
                        <br/>
                        <br/>
                        <i class="fas fa-angle-double-right"></i> <strong>Album:</strong> {album_name}
                        <br/>
                        <i class="fas fa-minus"></i><strong> Rating:</strong> {track_rating} 
                        
                        </h2>
                            {}                    
                        </div>
                    </div>
                </section>
                <footer className="card-footer">
                    <Link to={`/home/lyrics/${track_id}`} 
                        className="button is-primary is-outlined is-medium card-footer-item"> 
                        <strong>View Letric <i class="fas fa-eye"></i></strong>
                    </Link>                    
                </footer>
                </div>             
            </div>            
            </>
        )
    }
}

export default TrackCard