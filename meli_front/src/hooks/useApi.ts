import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BACKEND_ENDPOINT } from '../config/config';

axios.defaults.baseURL = BACKEND_ENDPOINT;

export const useApi = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async (params: AxiosRequestConfig) => {
        try {
            setLoading(true);
            const result = await axios.request(params);
            setResponse(result);
        }
        catch (err: any) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData(axiosParams);
    }, [fetchData, axiosParams.url]);

    return { response, error, loading };
}