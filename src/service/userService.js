// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';


const getJWT = () => {
    return localStorage.getItem('jwtToken');
};


const postLogin = async (data) => {
    try {
        console.log(data)
        const response = await axiosInstance.post('/login_check', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};

const postSignUp = async (data) => {
    try {
        return await axiosInstance.post(`/user/new`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return { status: 401, message: 'Unauthorized' };
    }
};



export { postLogin, postSignUp };
