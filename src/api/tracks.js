import axios from 'axios'
import {API_KEY, PERMIT_API_HEROKU, MUSIX_MATCH_API} from '../constants/api'

export const getTracks = () =>{
    return axios.get(`${PERMIT_API_HEROKU+MUSIX_MATCH_API}chart.tracks.get?chart_name=hot&page=1&page_size=20&country=co&f_has_lyrics=1&apikey=${API_KEY}`)
}

export const getTrack = () =>{
    return axios.get(`${PERMIT_API_HEROKU+MUSIX_MATCH_API}track.lyrics.get?track_id=15953433&apikey=${API_KEY}`)
        
}