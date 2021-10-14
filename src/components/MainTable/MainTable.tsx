import * as React from "react";
import classNames from 'classnames/bind';

import style from "./MainTable.module.css";
import {AdminModeContext} from "../../App";

type MainTableProps = {
    applications: any[];
};

type MainTableState = {
    currentApplicationId: number;
};

export default class MainTable extends React.Component<MainTableProps, MainTableState> {
    readonly state: MainTableState = {
        currentApplicationId: 0,
    };

    handleSelectApplication = (id: number, event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        this.setState({currentApplicationId: id});
        document.addEventListener("keydown", this.escRemoveSelection, false);
    };

    escRemoveSelection = (event: KeyboardEvent) => {
        if (event.code === "Escape") {
            this.handleRemoveSelection();
        }
    };

    handleRemoveSelection = () => {
        this.setState({currentApplicationId: 0});
        document.removeEventListener("keydown", this.escRemoveSelection, false);
    };

    handleChangeApplication = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        console.log(this.state.currentApplicationId)
    };

    render() {
        return (
            <div className={style.wrapper} onClick={() => this.handleRemoveSelection()}>
                <AdminModeContext.Consumer>
                    {({adminMode}) => (
                        <div className={style.tableButtons}>
                            <button className={style.tableButton} onClick={this.handleChangeApplication}
                                    disabled={!adminMode}>Добавить
                            </button>
                            <button className={style.tableButton} onClick={this.handleChangeApplication}
                                    disabled={!adminMode || this.state.currentApplicationId === 0}>Изменить
                            </button>
                            <button className={style.tableButton} onClick={this.handleChangeApplication}
                                    disabled={!adminMode || this.state.currentApplicationId === 0}>Удалить
                            </button>
                        </div>
                    )}
                </AdminModeContext.Consumer>
                <div className={style.tableWrapper}>
                    <div className={style.tableScroll}>
                        <table className={style.table}>
                            <thead>
                            <tr>
                                <th>Номер заявки</th>
                                <th>Создана</th>
                                <th>Фирма клиента</th>
                                <th>ФИО перевозчика</th>
                                <th>Телефен перевозчика</th>
                                <th>Комментарий</th>
                                <th>ATI перевозчика</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.applications.map(item => (
                                <tr key={item.id}
                                    className={classNames(style.application, this.state.currentApplicationId === item.id ? style.active : '')}
                                    onClick={(e) => this.handleSelectApplication(item.id, e)}>
                                    <td>{item.id}</td>
                                    <td>{item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}</td>
                                    <td>{item.companyName}</td>
                                    <td>{item.carrierFullName}</td>
                                    <td>{item.carrierPhoneNumber}</td>
                                    <td>{item.comment === "" ? "Отсутствует" : item.comment}</td>
                                    <td><a href={`https://ati.su/firms/${item.ATICode}/info`}>{item.ATICode}</a></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}