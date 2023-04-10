import apiClient from "../services/apiClient";
import { useState, useEffect } from 'react';
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => controller.abort();
    }, [])

    return { genres, error }
}

export default useGenres;