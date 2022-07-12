import { BACKEND_ENDPOINT } from "../config/config";

export const getItems = async (query: string) => {
    const response = await fetch(`${BACKEND_ENDPOINT}/items?q=${query}`);

    if (response.status !== 200)
        return null;

    const data = await response.json();

    return data;
}

export const getDetailItem = async (id: string) => {
    const response = await fetch(`${BACKEND_ENDPOINT}/items/${id}`);

    const data = await response.json();

    return data;
}