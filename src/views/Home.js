import React from 'react'
import { getTracks } from '../api/tracks'
import TrackCard from '../components/TrackCard'
import Loader from '../components/Loader'
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
        if(tracks === undefined ||
            Object.keys(tracks).length === 0){
            return (<>
                <div className="container">
                    <div className="centrar">
                        <Loader/>                    
                    </div>                
                </div>            
                </>
                )
        }
        else{
        return <>
            <div className="container ">
                <div className="contenedor margin text_center">
                    <div className="">
                        <h1 className="title">Top 20 Letrics</h1>
                    </div>
                </div>
            </div>
            <div className="contenedor is-desktop">
                {tracks.map(item =><TrackCard key={item.track.track_id} {...item.track}/>)}
            </div>        
        </>
        }
    }
}

export default Home
