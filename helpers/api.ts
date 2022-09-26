import axios from "axios";

async function fetchData(type: string = 'workshops', id: string|null = null): Promise<any> {
    if (type === 'single') {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/workshops/${id}`
        );
        return [res.data];
    }

    if (type === 'categories') {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/categories`
        );
        return res.data;
    }

    if (type === 'orders') {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/orders`
        );
        return res.data;
    }

    if (type === 'users') {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users`
        );
        return res.data;
    }

    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/workshops`
    );
    return res.data;
}

export default fetchData;