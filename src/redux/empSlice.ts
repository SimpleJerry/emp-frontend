import {createSlice} from "@reduxjs/toolkit";

interface Employee {
    id: string;
    name: string;
    age: number;
    job: string;
    language: string;
    pay: number;
}

const initialData: Employee[] = [
    {id: "1", name: 'John', age: 35, job: "frontend", language: "react", pay: 1},
    {id: "2", name: 'Peter', age: 35, job: "backend", language: "python", pay: 1},
    {id: "3", name: 'Sue', age: 35, job: "frontend", language: "javascript", pay: 1},
    {id: "4", name: 'Susan', age: 35, job: "backend", language: "java", pay: 1},
]

const initialState = {
    mode: "",
    selectedId: "",
    upInfo: null,
    infos: initialData,
    errors: null,
    loading: false,
}

const empSlice = createSlice({
    name: "empSlice",
    initialState,
    reducers: {}
})

export const {} = empSlice.actions;
export default empSlice.reducer;