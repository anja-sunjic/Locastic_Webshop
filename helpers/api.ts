import axios from "axios";

async function fetchData(type: string = 'workshops', id: any = null): Promise<any> {
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

export async function postData(data: any): Promise<any> {
    const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/orders`,
        data
    );
    return res.data;
}

export default fetchData;