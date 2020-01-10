import axios from 'axios';
export const BASE_API_URL = 'http://icevision-aig1.ru:8080';

export default class ApiClient {
    static get = async (url, params = null) => {
    	try {
    		const res = await axios.get(`${BASE_API_URL}${url}`, {params: {...params}});
    		return res.data;
    	} catch (e) {
    		if (e.response) { 
    			return {
    				status: e.response.status,
    				message: (e.response.data && e.response.data.message) ? e.response.data.message : ''
    			}
    		}
    	}
    }  

    static post = async (url, data, config) => {    
    	try {
    		const res = await axios.post(`${BASE_API_URL}${url}`, data, config);
    		return res.data;
    	} catch (e) {
    		if (e.response) {
    			return {
    				status: e.response.status,
    				message: (e.response.data && e.response.data.message) ? e.response.data.message : ''
    			}
    		}
    	}
    }
    
    static put = async (url, data, config) => {
    	try {
    		const res = await axios.put(`${BASE_API_URL}${url}`, data, config);
    		return res.data;
    	} catch (e) {
    		if (e.response) {
    			return {
    				status: e.response.status,
    				message: (e.response.data && e.response.data.message) ? e.response.data.message : ''
    			}
    		}
    	}
    }

    static delete = async (url, headers = null, data) => {
    	try {
    		const res = await axios.delete(`${BASE_API_URL}${url}`, headers, data);
    		return res.data;
    	} catch (e) {
    		if (e.response) {
    			return {
    				status: e.response.status,
    				message: (e.response.data && e.response.data.message) ? e.response.data.message : ''
    			}
    		}
    	}
	}
}