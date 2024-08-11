import axios from 'axios';

// Base URL untuk backend Laravel
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

// Tipe data untuk statistik
interface Statistics {
    online_users: number;
    today: number;
    yesterday: number;
    this_month: number;
    last_month: number;
}

// Tipe data untuk status online
interface OnlineStatus {
    online_users_count: number;
}

export async function logVisit(): Promise<void> {
    try {
        await axios.post(`${API_BASE_URL}/log-visit`);
    } catch (error) {
        console.error('Error logging visit:', error);
    }
}

export async function fetchOnlineStatus(): Promise<OnlineStatus | null> {
    try {
        const response = await axios.get(`${API_BASE_URL}/online-status`);
        return response.data;
    } catch (error) {
        console.error('Error fetching online status:', error);
        return null;
    }
}

export async function fetchStatistics(): Promise<Statistics | null> {
    try {
        const response = await axios.get(`${API_BASE_URL}/statistics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching statistics:', error);
        return null;
    }
}
