import axios from "axios";

const request = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    responseType: 'json'
})

const _apiKey = '014790e247641f87a6ec229cf9cd44e4'
const posterUrl = 'https://image.tmdb.org/t/p/w500'
const videoUrl = 'https://www.youtube.com/watch?v='

export {request, _apiKey, posterUrl, videoUrl}