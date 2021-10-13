import * as React from "react";
import classNames from 'classnames/bind';

import style from "./MainTable.module.css";

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

    handleSelectApplication = (id: number) => {
        this.setState({currentApplicationId: id});
    };

    handleChangeApplication = () => {
        console.log(this.state.currentApplicationId)
    };

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.tableButtons}>
                    <button className={style.tableButton} onClick={() => this.handleChangeApplication()} disabled={true}>Добавить</button>
                    <button className={style.tableButton} onClick={() => this.handleChangeApplication()} disabled={this.state.currentApplicationId === 0}>Изменить</button>
                    <button className={style.tableButton} onClick={() => this.handleChangeApplication()} disabled={this.state.currentApplicationId === 0}>Удалить</button>
                </div>
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
                                    onClick={() => this.handleSelectApplication(item.id)}>
                                    <td>{item.id}</td>
                                    <td>{item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}</td>
                                    <td>{item.companyName}</td>
                                    <td>{item.carrierFullName}</td>
                                    <td>{item.carrierPhoneNumber}</td>
                                    <td>{item.comment === "" ? "Отсутствует" : item.comment}</td>
                                    <td>{item.ATICode}</td>
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