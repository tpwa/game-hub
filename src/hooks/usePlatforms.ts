import apiClient from "../services/apiClient";
import { useState, useEffect } from 'react';
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface FetchPlatformResponse {
    count: number;
    results: Platform[];
}

const usePlatforms = () => {

    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchPlatformResponse>('/platforms', { signal: controller.signal })
            .then(res => {
                setPlatforms(res.data.results);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => controller.abort();
    }, [])

    return { platforms, error }
}

export default usePlatforms;