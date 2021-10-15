import * as React from "react";
import classNames from 'classnames/bind';

import style from "./Main.module.css";
import {AdminModeContext, Application} from "../../App";

import ApplicationModal from "../ApplicationModal/ApplicationModal";

import {testData} from "../../assets/TestData"

type MainTableProps = {};

type MainTableState = {
    currentApplication: Application;
    modalIsOpen: boolean;
    applications: Application[];

};

const emptyApplication: Application = {
    id: 0,
    date: new Date(),
    companyName: "",
    comment: "",
    carrierFullName: "",
    carrierPhoneNumber: "",
    atiCode: 0,
};

export default class Main extends React.Component<MainTableProps, MainTableState> {
    readonly state: MainTableState = {
        currentApplication: emptyApplication,
        modalIsOpen: false,
        applications: []
    };

    getAllValues(): Array<any> {
        let list = new Array<any>();

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value;
            if (key && key !== "lastId") {
                value = localStorage.getItem(key);
            }
            if (value) {
                let index: number = Number(key);
                value = JSON.parse(value);
                value.date = new Date(value.date);
                list[index] = value;
            }
        }
        console.log(list);
        return list;

    }

    handleSelectApplication = (application: Application, event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        this.setState({currentApplication: application});
        document.addEventListener("keydown", this.escRemoveSelection, false);
    };

    handleRemoveSelection = () => {
        this.setState({
            currentApplication: emptyApplication
        });
        document.removeEventListener("keydown", this.escRemoveSelection, false);
    };

    escRemoveSelection = (event: KeyboardEvent) => {
        if (event.code === "Escape") {
            this.handleRemoveSelection();
        }
    };

    handleAddApplication = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        this.handleRemoveSelection();
        this.openModal();
    };

    handleChangeApplication = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        this.openModal();
    };

    handleDeleteApplication = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        localStorage.removeItem(this.state.currentApplication.id.toString());
        this.updateApplications();
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    updateApplications(): void {
        let values = this.getAllValues();
        this.setState({applications: values});
    }

    componentDidMount(): void {
        this.updateApplications();
    }

    addTestData = () => {
        let list = testData.applications;
        let lastId;
        lastId = localStorage.getItem('lastId');
        let newId = lastId === null ? 0 : parseInt(lastId);
        for (let i = 0; i < list.length; i++) {
            newId++;
            list[i].id = newId;
            localStorage.setItem(newId.toString(), JSON.stringify(list[i]));
        }
        localStorage.setItem('lastId', newId.toString());
        this.updateApplications();
    };

    render() {
        return (
            <div className={style.mainWrapper}>
                <div className={style.main} onClick={() => this.handleRemoveSelection()}>

                    <AdminModeContext.Consumer>
                        {({adminMode}) => (
                            <div className={style.tableButtons}>
                                <button className={classNames(style.tableButton, style.testDataButton)}
                                        onClick={() => this.addTestData()}>Заполнить тестовыми данными
                                </button>
                                <div className={style.tableEditButtons}>
                                    <button className={style.tableButton} onClick={this.handleAddApplication}
                                            disabled={!adminMode}>Добавить
                                    </button>
                                    <button className={style.tableButton} onClick={this.handleChangeApplication}
                                            disabled={!adminMode || this.state.currentApplication.id === 0}>Изменить
                                    </button>
                                    <button className={style.tableButton} onClick={this.handleDeleteApplication}
                                            disabled={!adminMode || this.state.currentApplication.id === 0}>Удалить
                                    </button>
                                </div>
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
                                    <th>ATI перевозчика</th>
                                    <th>Комментарий</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.applications.map(item => (
                                    <tr key={item.id}
                                        className={classNames(style.application, this.state.currentApplication.id === item.id ? style.active : '')}
                                        onClick={(e) => this.handleSelectApplication(item, e)}>
                                        <td>{item.id}</td>
                                        <td>{item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}</td>
                                        <td>{item.companyName === "" ? "Не указана" : item.companyName}</td>
                                        <td>{item.carrierFullName === "" ? "Не указано" : item.carrierFullName}</td>
                                        <td>{item.carrierPhoneNumber === "" ? "Не указан" : item.carrierPhoneNumber}</td>
                                        <td>
                                            {item.atiCode === 0 ? "—" :
                                                <a href={`https://ati.su/firms/${item.atiCode}/info`}>{item.atiCode}</a>
                                            }
                                        </td>
                                        <td>{item.comment === "" ? "Отсутствует" : item.comment}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ApplicationModal application={this.state.currentApplication} isOpen={this.state.modalIsOpen}
                                  closeModal={() => this.closeModal()} update={() => this.updateApplications()}/>
            </div>
        )
    }
}