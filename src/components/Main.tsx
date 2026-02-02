import React from 'react';
import EmployList from "@/components/EmployList";
import Register from "@/components/Register";
import Update from "@/components/Update";


const Main = () => {
    return (
        <>
            <div>
                <EmployList/>
            </div>
            <div>
                <Register/>
                <Update/>
            </div>
        </>
    );
};

export default Main;