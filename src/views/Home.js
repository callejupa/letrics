import React from 'react'
import { getTracks } from '../api/tracks'
import TrackCard from '../components/TrackCard'
import '../styles/home.css'

class Home extends React.Component {

    state = {
        tracks: []
    }

    componentDidMount(){
        getTracks()
        .then((response=> {
            // console.log(response.data.message.body.track_list)
            this.setState({ tracks: response.data.message.body.track_list })
        }))
    }

    render(){
        const tracks = this.state.tracks
        return <>
            <div classname="contenedor">
                <h1 className="title">Top Letrics</h1>
            </div>
            <div className="contenedor is-desktop">
                {this.state.tracks.map(item =><TrackCard key={item.track.track_id} {...item.track}/>)}
            </div>        
        </>
    }
}

export default Home
