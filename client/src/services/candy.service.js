import axios from "axios";

const CANDY_INSTANCE = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

// Create a new candy
export const createCandyService = async (candyData) => {
    try {
        const res = await CANDY_INSTANCE.post('/candy', candyData);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Get all candys
export const getAllCandysService = async () => {
    try {
        const res = await CANDY_INSTANCE.get('/candy');
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Get a single candy by ID
export const getCandyByIdService = async (id) => {
    try {
        const res = await CANDY_INSTANCE.get(`/candy/${id}/details`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Update a candy by ID
export const updateCandyByIdService = async (id, candyData) => {
    try {
        const res = await CANDY_INSTANCE.patch(`/candy/${id}/edit`, candyData);
        return res.data;
    } catch (error) {
        throw error;
    }
}

// Delete a candy by ID
export const deleteCandyByIdService = async (id) => {
    try {
        const res = await CANDY_INSTANCE.delete(`/candy/${id}/details`);
        return res.data;
    } catch (error) {
        throw error;
    }
}