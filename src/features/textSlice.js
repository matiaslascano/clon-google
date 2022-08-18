import { createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({
  name: 'text',
  initialState:{
    textString: "",
  },
  
  reducers: {
    setTextString: (state, action) =>{
      state.textString = action.payload;
    }
  },
});

  export const {setTextString} = textSlice.actions;

  export const selectTextString = state => state.text.textString;


export default textSlice.reducer;
