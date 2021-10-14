import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


export interface Application {
    id: number;
    date: Date;
    companyName: string;
    comment: string;
    carrierFullName: string;
    carrierPhoneNumber: string;
    atiCode: number;
}

/*const data1: {
    requests: Request[]
} = {
    requests: [
        {
            id: 1,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 2,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 3,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 4,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 5,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 6,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 7,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 8,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 9,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 10,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 11,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 12,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 13,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 14,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 15,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 16,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 17,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 18,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 19,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 20,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        },
        {
            id: 21,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            atiCode: "ati",
        }
    ]
};*/
/*
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
};*/




export const AdminModeContext = React.createContext({
    adminMode: false,
    toggleMode: () => {
    }

});

type AppState = {
    adminMode: boolean;
};

export class App extends React.Component<{}, AppState> {
    readonly state: AppState = {
        adminMode: true,
    };

    toggleMode = () => {
        this.setState({adminMode: !this.state.adminMode});
        console.log(this.state.adminMode)
    };

    render() {
        return (
            <AdminModeContext.Provider value={{adminMode: this.state.adminMode, toggleMode: () => this.toggleMode()}}>
                <div className="App">
                    <Header/>
                    <Main/>
                </div>
            </AdminModeContext.Provider>
        );
    }
}

export default App;
