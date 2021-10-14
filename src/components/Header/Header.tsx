import * as React from "react";

import style from "./Header.module.css";
import logo from "../../assets/images/truck.svg";
import {AdminModeContext} from '../../App';


export default class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <div className={style.headerTitleWrapper}>
                    <img src={logo} className={style.logo} alt="logo"/>
                    <span className={style.headerTitle}>LogisTruck</span>
                </div>
                <AdminModeContext.Consumer>
                    {({adminMode, toggleMode}) => (
                        <div className={style.mode}>
                            <button className={style.modeButton}
                                    onClick={toggleMode}>{adminMode ? 'Администратор' : 'Пользователь'}</button>
                        </div>
                    )}
                </AdminModeContext.Consumer>

            </div>
        );
    }
}

