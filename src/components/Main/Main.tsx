import * as React from "react";
import classNames from 'classnames/bind';

import style from "./Main.module.css";
import {AdminModeContext, Application} from "../../App";

import ApplicationModal from "../ApplicationModal/ApplicationModal";

const data: {
    applications: Application[]
} = {
    applications: [
        {
            id: 1,
            date: new Date("2021-09-14 13:12:46"),
            companyName: "АвтоАс",
            comment: "",
            carrierFullName: "Нестеров Макар Маркович",
            carrierPhoneNumber: "+7144026785",
            atiCode: 60638,
        },
        {
            id: 2,
            date: new Date("2021-09-17 23:39:52"),
            companyName: "Прайм-Авто",
            comment: "",
            carrierFullName: "Кузнецов Даниил Вячеславович",
            carrierPhoneNumber: "+7156133137",
            atiCode: 70531,
        },
        {
            id: 3,
            date: new Date("2021-09-23 22:03:29"),
            companyName: "ГрузАвтоэлита",
            comment: "",
            carrierFullName: "Антонов Савелий Матвеевич",
            carrierPhoneNumber: "+7222607102",
            atiCode: 88271,
        },
        {
            id: 4,
            date: new Date("2021-09-29 18:28:39"),
            companyName: "Автополис",
            comment: "",
            carrierFullName: "Золотова Виктория Мироновна",
            carrierPhoneNumber: "+7257457484",
            atiCode: 34161,
        },
        {
            id: 5,
            date: new Date("2021-10-07 22:32:34"),
            companyName: "Автолидер",
            comment: "",
            carrierFullName: "Шульгин Владимир Ярославович",
            carrierPhoneNumber: "+7282332520",
            atiCode: 35171,
        },
        {
            id: 6,
            date: new Date("2021-09-20 09:31:46"),
            companyName: "Кабриолет",
            comment: "",
            carrierFullName: "Парамонов Григорий Владиславович",
            carrierPhoneNumber: "+7291022904",
            atiCode: 11040,
        },
        {
            id: 7,
            date: new Date("2021-09-24 01:16:28"),
            companyName: "Орлан",
            comment: "",
            carrierFullName: "Суслов Филипп Максимович",
            carrierPhoneNumber: "+7305740259",
            atiCode: 47210,
        },
        {
            id: 8,
            date: new Date("2021-09-29 06:06:49"),
            companyName: "Стрела",
            comment: "",
            carrierFullName: "Орлова Милана Михайловна",
            carrierPhoneNumber: "+7336965758",
            atiCode: 14737,
        },
        {
            id: 9,
            date: new Date("2021-09-15 21:00:13"),
            companyName: "Новые горизонты",
            comment: "",
            carrierFullName: "Филатова Анна Глебовна",
            carrierPhoneNumber: "+7379028738",
            atiCode: 92471,
        },
        {
            id: 10,
            date: new Date("2021-10-05 16:16:40"),
            companyName: "Бэст",
            comment: "",
            carrierFullName: "Захаров Александр Эмильевич",
            carrierPhoneNumber: "+7474765195",
            atiCode: 78493,
        },
        {
            id: 11,
            date: new Date("2021-09-12 06:08:17"),
            companyName: "Сириус",
            comment: "",
            carrierFullName: "Сергеев Алексей Арсентьевич",
            carrierPhoneNumber: "+7547587223",
            atiCode: 28943,
        },
        {
            id: 12,
            date: new Date("2021-09-08 05:31:03"),
            companyName: "Фордевинд",
            comment: "",
            carrierFullName: "Фролова Александра Павловна",
            carrierPhoneNumber: "+7550266648",
            atiCode: 10149,
        },
        {
            id: 13,
            date: new Date("2021-09-05 10:08:28"),
            companyName: "Макси",
            comment: "",
            carrierFullName: "Лебедев Алексей Савельевич",
            carrierPhoneNumber: "+7610524443",
            atiCode: 11142,
        },
        {
            id: 14,
            date: new Date("2021-09-22 18:21:56"),
            companyName: "Зеленый свет",
            comment: "",
            carrierFullName: "Осипов Денис Тимофеевич",
            carrierPhoneNumber: "+7650898658",
            atiCode: 48185,
        },
        {
            id: 15,
            date: new Date("2021-09-14 18:30:43"),
            companyName: "Юность",
            comment: "",
            carrierFullName: "Мартынов Игорь Павлович",
            carrierPhoneNumber: "+7681226412",
            atiCode: 94704,
        },
        {
            id: 16,
            date: new Date("2021-09-09 12:12:01"),
            companyName: "Автостиль",
            comment: "",
            carrierFullName: "Демьянова Дарья Владиславовна",
            carrierPhoneNumber: "+7752195211",
            atiCode: 20201,
        },
        {
            id: 17,
            date: new Date("2021-10-07 15:50:49"),
            companyName: "Физика вождения",
            comment: "",
            carrierFullName: "Михайлов Давид Максимович",
            carrierPhoneNumber: "+7755004127",
            atiCode: 70785,
        },
        {
            id: 18,
            date: new Date("2021-09-12 00:43:02"),
            companyName: "Формула-1",
            comment: "",
            carrierFullName: "Гаврилов Егор Ильич",
            carrierPhoneNumber: "+7919581970",
            atiCode: 12622,
        },
        {
            id: 19,
            date: new Date("2021-09-16 14:07:37"),
            companyName: "Светофор",
            comment: "",
            carrierFullName: "Боброва Алиса Максимовна",
            carrierPhoneNumber: "+7945953646",
            atiCode: 74081,
        },
        {
            id: 20,
            date: new Date("2021-10-02 12:06:13"),
            companyName: "Фаркоп",
            comment: "",
            carrierFullName: "Иванова Алёна Арсентьевна",
            carrierPhoneNumber: "+7962691517",
            atiCode: 84790,
        },
        {
            id: 21,
            date: new Date("2021-09-16 16:49:25"),
            companyName: "АвтоГарвард",
            comment: "",
            carrierFullName: "Кузьмин Константин Александрович",
            carrierPhoneNumber: "+7967647615",
            atiCode: 22299,
        }
    ]
};

type MainTableProps = {};

type MainTableState = {
    currentApplication: Application;
    modalIsOpen: boolean;
    applications: Application[];

};

export default class Main extends React.Component<MainTableProps, MainTableState> {
    readonly state: MainTableState = {
        currentApplication: {
            id: 0,
            date: new Date(),
            companyName: "",
            comment: "",
            carrierFullName: "",
            carrierPhoneNumber: "",
            atiCode: 0,
        },
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
            currentApplication: {
                id: 0,
                date: new Date(),
                companyName: "",
                comment: "",
                carrierFullName: "",
                carrierPhoneNumber: "",
                atiCode: 0,
            }
        });
        document.removeEventListener("keydown", this.escRemoveSelection, false);
    };

    escRemoveSelection = (event: KeyboardEvent) => {
        if (event.code === "Escape") {
            this.handleRemoveSelection();
        }
    };

    handleAddApplication = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            currentApplication: {
                id: 0,
                date: new Date(),
                companyName: "",
                comment: "",
                carrierFullName: "",
                carrierPhoneNumber: "",
                atiCode: 0,
            }
        });
        event.stopPropagation();
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
        let list = data.applications;
        let lastId;
        lastId = localStorage.getItem('lastId');
        let newId = lastId === null ? 0 : parseInt(lastId);
        /*localStorage.setItem('lastId', applicationId.toString());*/
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