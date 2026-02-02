"use client"
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Employee} from "@/redux/empSlice";
import {useDispatch} from "react-redux";
import {registerEmp} from "@/redux/empSlice";
import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const Label = styled.label`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #333;
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
`

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
        <Form onSubmit={handleSubmit}>
            <Label>Name
                <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                />
            </Label>
            <Label>Age
                <Input
                    type="number"
                    name="age"
                    onChange={handleChange}
                />
            </Label>
            <Label>Job
                <Input
                    type="text"
                    name="job"
                    onChange={handleChange}
                />
            </Label>
            <Label>Language
                <Input
                    type="text"
                    name="language"
                    onChange={handleChange}
                />
            </Label>
            <Label>Pay
                <Input
                    type="number"
                    name="pay"
                    onChange={handleChange}
                />
            </Label>
            <button type="submit">등록</button>
        </Form>
    );
};

export default Register;