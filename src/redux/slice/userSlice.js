import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        {
            name: "Arun Kumar",
            age: "24",
            email: "arun.k24@gmail.com",
            contact: "9876543210",
        },
        {
            name: "Megha R",
            age: "22",
            email: "megha.r22@yahoo.com",
            contact: "9123456780",
        },
        {
            name: "Sanjay Varma",
            age: "27",
            email: "sanjayv27@outlook.com",
            contact: "9001234567",
        },
        {
            name: "Priya Sharma",
            age: "25",
            email: "priya.sharma25@gmail.com",
            contact: "8899776655",
        },
        {
            name: "Vikram Singh",
            age: "29",
            email: "vikram_singh29@rediffmail.com",
            contact: "9811122233",
        },

    ]
};

export const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((ele, index) => {
                return index !== action.payload
            })
        }
    }
});

console.log(userSlice.reducer)

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer