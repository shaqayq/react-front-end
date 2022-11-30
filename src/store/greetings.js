import {createAsyncThunk} from '@reduxjs/toolkit';

const GET_GREETING = 'GET_GREETING';
const API_URL = 'http://localhost:3000/api/v1/greeting';
const initialState = {
    gretting: ''
}

const greetingReducer = (state = initialState , action) => {
    switch (action.type) {
        case `${GET_GREETING}/fulfilled`:
            return {...state , greeting:  action.payload};
        
        default:
           return state;
    }
}

export const fetchGreeting = createAsyncThunk(GET_GREETING ,async() => {

        const response = await fetch(API_URL);
        const greeting=await response.json();
      
        console.log(greeting.message);
        return greeting.message;

})

export default greetingReducer