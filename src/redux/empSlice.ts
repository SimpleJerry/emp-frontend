import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Employee {
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
type Mode = "" | "register" | "update" | "delete" | "reset"


interface EmpState {
    mode: Mode,
    selectedId: string,
    upInfo: Employee | null,
    infos: Employee[],
    error: string | null,
    loading: boolean,
}

const initialState: EmpState = {
    mode: "",
    selectedId: "",
    upInfo: null,
    infos: initialData,
    error: null,
    loading: false,
}

const empSlice = createSlice({
    name: "empSlice",
    initialState,
    reducers: {
        selectId(state: EmpState, action: PayloadAction<string>) {
            console.log("selectId", action.payload)
            state.selectedId = action.payload;
        },
        registerEmp(state: EmpState, action: PayloadAction<Employee>) {
            const nextId = state.infos.length ?
                Math.max(...state.infos.map(obj => Number(obj.id))) + 1 : 1;
            state.infos = [
                ...state.infos,
                {...action.payload, id: String(nextId)},
            ];
        }
    }
})

export const {selectId, registerEmp} = empSlice.actions;
export default empSlice.reducer;