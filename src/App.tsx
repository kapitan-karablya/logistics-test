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
