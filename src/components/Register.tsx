"use client"
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Employee} from "@/redux/empSlice";
import {useDispatch} from "react-redux";
import {registerEmp} from "@/redux/empSlice";

const initialState = {
    id: "", name: "", age: 0, job: "", language: "", pay: 0
}

const Register = () => {
    const [empInfo, setEmpInfo] = useState<Employee>(initialState);
    const dispatch = useDispatch();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEmpInfo(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(registerEmp(empInfo));
        setEmpInfo(initialState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>Age
                <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                />
            </label>
            <label>Job
                <input
                    type="text"
                    name="job"
                    onChange={handleChange}
                />
            </label>
            <label>Language
                <input
                    type="text"
                    name="language"
                    onChange={handleChange}
                />
            </label>
            <label>Pay
                <input
                    type="number"
                    name="pay"
                    onChange={handleChange}
                />
            </label>
            <button type="submit">등록</button>
        </form>
    );
};

export default Register;