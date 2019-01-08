import types from './types';
import axios from 'axios';
import config from '../config';

const {API_KEY, BASE_URL} = config.api

export function getAllItems(){

    const resp = axios.get(BASE_URL + API_KEY)

    return {
        type: types.GET_ALL_TO_DOS,
        payload: resp
    }
}