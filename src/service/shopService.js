// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';


const getJWT = () => {
    return localStorage.getItem('token');
};


const postShop = async (data) => {
    try {
        console.log(data)
        const response = await axiosInstance.post('/private/shop/new', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};

const deployShop = async (id) => {
    try {
        const response = await axiosInstance.post('/private/shop/deploy/' + id , [], {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
            timeout: 100000
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};


export { postShop, deployShop };
