import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainTable from "./components/MainTable/MainTable";


interface Application {
    id: number;
    date: Date;
    companyName: string;
    comment: string;
    carrierFullName: string;
    carrierPhoneNumber: string;
    ATICode: number;
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
            ATICode: "ati",
        },
        {
            id: 2,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 3,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 4,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 5,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 6,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 7,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 8,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 9,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 10,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 11,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 12,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 13,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 14,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 15,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 16,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 17,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 18,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 19,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 20,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        },
        {
            id: 21,
            date: "дата",
            companyName: "имя",
            comment:  "коммент",
            carrierFullName: "фио",
            carrierPhoneNumber: "телефон",
            ATICode: "ati",
        }
    ]
};*/

const data: {
    applications: Application[]
} = {
    applications: [
        {
            id: 1,
            date: new Date("2021-09-14 13:12:46"),
            companyName: "АвтоАс",
            comment:  "",
            carrierFullName: "Нестеров Макар Маркович",
            carrierPhoneNumber: "+78127897",
            ATICode: 60638,
        },
        {
            id: 2,
            date: new Date("2021-09-17 23:39:52"),
            companyName: "Прайм-Авто",
            comment:  "",
            carrierFullName: "Кузнецов Даниил Вячеславович",
            carrierPhoneNumber: "+74373865",
            ATICode: 70531,
        },
        {
            id: 3,
            date: new Date("2021-09-23 22:03:29"),
            companyName: "ГрузАвтоэлита",
            comment:  "",
            carrierFullName: "Антонов Савелий Матвеевич",
            carrierPhoneNumber: "+77737352",
            ATICode: 88271,
        },
        {
            id: 4,
            date: new Date("2021-09-29 18:28:39"),
            companyName: "Автополис",
            comment:  "",
            carrierFullName: "Золотова Виктория Мироновна",
            carrierPhoneNumber: "+72568949",
            ATICode: 34161,
        },
        {
            id: 5,
            date: new Date("2021-10-07 22:32:34"),
            companyName: "Автолидер",
            comment:  "",
            carrierFullName: "Шульгин Владимир Ярославович",
            carrierPhoneNumber: "+76153106",
            ATICode: 35171,
        },
        {
            id: 6,
            date: new Date("2021-09-20 09:31:46"),
            companyName: "Кабриолет",
            comment:  "",
            carrierFullName: "Парамонов Григорий Владиславович",
            carrierPhoneNumber: "+73404895",
            ATICode: 11040,
        },
        {
            id: 7,
            date: new Date("2021-09-24 01:16:28"),
            companyName: "Орлан",
            comment:  "",
            carrierFullName: "Суслов Филипп Максимович",
            carrierPhoneNumber: "+77375910",
            ATICode: 47210,
        },
        {
            id: 8,
            date: new Date("2021-09-29 06:06:49"),
            companyName: "Стрела",
            comment:  "",
            carrierFullName: "Орлова Милана Михайловна",
            carrierPhoneNumber: "+79026651",
            ATICode: 14737,
        },
        {
            id: 9,
            date: new Date("2021-09-15 21:00:13"),
            companyName: "Новые горизонты",
            comment:  "",
            carrierFullName: "Филатова Анна Глебовна",
            carrierPhoneNumber: "+78860510",
            ATICode: 92471,
        },
        {
            id: 10,
            date: new Date("2021-10-05 16:16:40"),
            companyName: "Бэст",
            comment:  "",
            carrierFullName: "Захаров Александр Эмильевич",
            carrierPhoneNumber: "+74538388",
            ATICode: 78493,
        },
        {
            id: 11,
            date: new Date("2021-09-12 06:08:17"),
            companyName: "Сириус",
            comment:  "",
            carrierFullName: "Сергеев Алексей Арсентьевич",
            carrierPhoneNumber: "+72565396",
            ATICode: 28943,
        },
        {
            id: 12,
            date: new Date("2021-09-08 05:31:03"),
            companyName: "Фордевинд",
            comment:  "",
            carrierFullName: "Фролова Александра Павловна",
            carrierPhoneNumber: "+72145662",
            ATICode: 10149,
        },
        {
            id: 13,
            date: new Date("2021-09-05 10:08:28"),
            companyName: "Макси",
            comment:  "",
            carrierFullName: "Лебедев Алексей Савельевич",
            carrierPhoneNumber: "+78783449",
            ATICode: 11142,
        },
        {
            id: 14,
            date: new Date("2021-09-22 18:21:56"),
            companyName: "Зеленый свет",
            comment:  "",
            carrierFullName: "Осипов Денис Тимофеевич",
            carrierPhoneNumber: "+74092437",
            ATICode: 48185,
        },
        {
            id: 15,
            date: new Date("2021-09-14 18:30:43"),
            companyName: "Юность",
            comment:  "",
            carrierFullName: "Мартынов Игорь Павлович",
            carrierPhoneNumber: "+72235269",
            ATICode: 94704,
        },
        {
            id: 16,
            date: new Date("2021-09-09 12:12:01"),
            companyName: "Автостиль",
            comment:  "",
            carrierFullName: "Демьянова Дарья Владиславовна",
            carrierPhoneNumber: "+73256108",
            ATICode: 20201,
        },
        {
            id: 17,
            date: new Date("2021-10-07 15:50:49"),
            companyName: "Физика вождения",
            comment:  "",
            carrierFullName: "Михайлов Давид Максимович",
            carrierPhoneNumber: "+72845053",
            ATICode: 70785,
        },
        {
            id: 18,
            date: new Date("2021-09-12 00:43:02"),
            companyName: "Формула-1",
            comment:  "",
            carrierFullName: "Гаврилов Егор Ильич",
            carrierPhoneNumber: "+79853221",
            ATICode: 12622,
        },
        {
            id: 19,
            date: new Date("2021-09-16 14:07:37"),
            companyName: "Светофор",
            comment:  "",
            carrierFullName: "Боброва Алиса Максимовна",
            carrierPhoneNumber: "+75572311",
            ATICode: 74081,
        },
        {
            id: 20,
            date: new Date("2021-10-02 12:06:13"),
            companyName: "Фаркоп",
            comment:  "",
            carrierFullName: "Иванова Алёна Арсентьевна",
            carrierPhoneNumber: "+78538169",
            ATICode: 84790,
        },
        {
            id: 21,
            date: new Date("2021-09-16 16:49:25"),
            companyName: "АвтоГарвард",
            comment:  "",
            carrierFullName: "Кузьмин Константин Александрович",
            carrierPhoneNumber: "+71766269",
            ATICode: 22299,
        }
    ]
};


function App() {
    return (
        <div className="App">
            <Header/>
            <MainTable applications={data.applications}/>
        </div>
    );
}

export default App;
