import React, {useState} from 'react';
import EmployList from "@/components/EmployList";
import Register from "@/components/Register";
import Update from "@/components/Update";
import {modes} from "@/redux/empSlice";
import {ModeItems} from "@/redux/empSlice";
import {useDispatch, useSelector} from "react-redux";
import {changeMode} from "@/redux/empSlice";
import {Buttons} from "@/components/EmployList";
import {RootState} from "@/redux/store";
import Delete from "@/components/Delete";
import Reset from "@/components/Reset";


const Main = () => {
    const [modeItems] = useState<ModeItems[]>(modes)
    const {mode} = useSelector((state: RootState) => state.emp);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <EmployList/>
            </div>
            <Buttons>
                {modeItems && modeItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => {
                            dispatch(changeMode(item.id))
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </Buttons>
            <div>
                {mode === "register" && <Register/>}
                {mode === "update" && <Update/>}
                {mode === "delete" && <Delete/>}
                {mode === "reset" && <Reset/>}
            </div>
        </>
    );
};

export default Main;