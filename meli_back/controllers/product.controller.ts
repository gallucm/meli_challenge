import { API_ENDPOINT } from './../config/config';
import { Request, Response } from "express";
import axios from 'axios';
import { AUTHOR } from "../helpers/data";

export const getItemsByQuery = async (req: Request, res: Response) => {
    const { q } = req.query;

    const response = await axios.get(`${API_ENDPOINT}/sites/MLA/search?q=${q}`);

    if (!response.data.results)
        return res.status(404).json({
            code: 404,
            message: 'Not found items'
        });

    const data = await response.data;

    const finalData = {
        author: {
            ...AUTHOR
        },
        categories: data.filters.length && data.filters[0].values ? data.filters[0].values[0].path_from_root.map(category => category.name) : [],
        items: data.results.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 2

                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                location: item.address.state_name,
                description: item.description
            }
        }).splice(0, 4)
    }

    return res.status(200).json({
        ...finalData
    });
}

export const getItemById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const responses = await Promise.all([
            axios.get(`${API_ENDPOINT}/items/${id}`),
            axios.get(`${API_ENDPOINT}/items/${id}/description`)
        ]);

        const [item, description] = responses.map(response => response.data);

        const finalData = {
            author: {
                ...AUTHOR
            },
            item: {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 2
                },
                picture: item.pictures[0].url,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description: description.plain_text
            }
        }

        return res.status(200).json({
            ...finalData
        });

    } catch (error) {
        return res.status(404).json({
            code: 404,
            message: 'Not found item'
        });
    }
}