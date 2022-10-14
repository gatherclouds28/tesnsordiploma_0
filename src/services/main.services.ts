import axios from 'api/http-common'
import { AxiosResponse } from 'axios'
import QueryString from 'qs'
import { RootObject } from './chartTypes'
import { ArtistsType } from './topArtistsTypes'


export type TopTagsType = {
  toptags: {
    tag: TagT[]
  }
}

type TagT = {
  name: string
}


const getTopTags = async (): Promise<AxiosResponse<TopTagsType>> => {
  const q = QueryString.stringify({
    method: 'tag.getTopTags',
    api_key: process.env.REACT_APP_API_TOKEN,
    format: 'json'
  })

  return axios.get(`?${q}`)
}

const getTopTracks = async (): Promise<AxiosResponse<RootObject>> => {
  const q = QueryString.stringify({
    method: 'chart.getTopTracks',
    api_key: process.env.REACT_APP_API_TOKEN,
    limit: 20,
    format: 'json'
  })

  return axios.get(`?${q}`)
}

const getTopArtists = async (): Promise<AxiosResponse<ArtistsType>> => {
  const q = QueryString.stringify({
    method: 'chart.getTopArtists',
    api_key: process.env.REACT_APP_API_TOKEN,
    limit: 20,
    format: 'json'
  })

  return axios.get(`?${q}`)
}

const HttpService = {
  getTopTags,
  getTopTracks,
  getTopArtists
}

export default HttpService
