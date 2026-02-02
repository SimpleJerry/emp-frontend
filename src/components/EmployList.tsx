import React from 'react';
import InforTable from "@/components/InforTable";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const EmployList = () => {
    const {infos} = useSelector((state:RootState) => state.emp)
    return (
        <>
            {infos.map((info, index) => (<div key={info.id}>{info.name}</div>))}
            <InforTable/>
        </>
    );
};

export default EmployList;