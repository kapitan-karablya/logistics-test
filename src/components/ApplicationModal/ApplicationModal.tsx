import * as React from "react";
import classNames from "classnames/bind";
import Modal from "react-modal";

import style from "./ApplicationModal.module.css";
import {Application} from "../../App";
import {ChangeEvent} from "react";

Modal.setAppElement('#root');


type ApplicationModalProps = {
    application: Application;
    isOpen: boolean;
    closeModal: Function;
    update: Function;
};

type ApplicationModalState = {
    application: Application;
};

export default class ApplicationModal extends React.Component<ApplicationModalProps, ApplicationModalState> {
    constructor(props: ApplicationModalProps) {
        super(props);
        this.state = {
            application: props.application,
        }
    };

    closeModal = () => {
        this.props.closeModal();
        this.setState({application: this.props.application})
    };

    onAfterOpen = () => {
        if (this.props.application.id !== this.state.application.id)
            this.setState({application: this.props.application});
    };

    handleStateChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        this.setState(prevState => ({
            application: {
                ...prevState.application,
                [name]: value
            }
        }))
    };

    handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let applicationId: number;
        let lastId;
        if (this.state.application.id === 0) {
            lastId = localStorage.getItem('lastId');
            applicationId = lastId === null ? 1 : parseInt(lastId) + 1;
            localStorage.setItem('lastId', applicationId.toString());
        } else applicationId = this.state.application.id;
        this.setState(prevState => ({
            application: {
                ...prevState.application,
                id: applicationId,
            }
        }));
        setTimeout(this.saveApplication, 1, applicationId);
        this.props.closeModal();
        this.props.update()
    };

    saveApplication = (applicationId: number) => {
        localStorage.setItem(applicationId.toString(), JSON.stringify(this.state.application));
        this.props.update()
    };

    render() {
        const isNewApplication = this.props.application.id === 0;
        return (
            <Modal isOpen={this.props.isOpen}
                   onRequestClose={() => this.closeModal()}
                   className={style.modalApplication}
                   onAfterOpen={() => this.onAfterOpen()}
            >
                <div className={style.modalHeader}>
                    {isNewApplication
                        ? "Новая Заявка"
                        : "Заявка №" + this.state.application.id
                        + " от " + this.state.application.date.toLocaleDateString()
                        + " " + this.state.application.date.toLocaleTimeString()}
                </div>
                <form className={style.modalForm}>
                    <div className={style.modalFormField}>
                        <label htmlFor="companyName">Фирма клиента</label>
                        <input id="companyName" name="companyName" type="text" className={style.modalInput}
                               value={isNewApplication ? undefined : this.state.application.companyName}
                               onChange={(event) => this.handleStateChange(event)}/>
                    </div>
                    <div className={style.modalFormField}>
                        <label htmlFor="carrierFullMame">ФИО первозчика</label>
                        <input id="carrierFullMame" name="carrierFullName" type="text"
                               className={classNames(style.modalInput)}
                               value={isNewApplication ? undefined : this.state.application.carrierFullName}
                               onChange={(event) => this.handleStateChange(event)}/>
                    </div>
                    <div className={style.modalFormCarrier}>
                        <div>
                            <label htmlFor="carrierPhoneNumber">Телефон перевозчика</label>
                            <input id="carrierPhoneNumber" name="carrierPhoneNumber"
                                   className={classNames(style.modalInput, style.modalInputPhone)} type="tel"
                                   value={isNewApplication ? undefined : this.state.application.carrierPhoneNumber}
                                   onChange={(event) => this.handleStateChange(event)}/>
                        </div>
                        <div className={style.modalFormAti}>
                            <label htmlFor="carrierAtiCode">ATI код перевозчика</label>
                            <input id="carrierAtiCode" name="atiCode"
                                   className={classNames(style.modalInput, style.modalInputAti)}
                                   value={isNewApplication ? undefined : this.state.application.atiCode}
                                   onChange={(event) => this.handleStateChange(event)}/>
                        </div>
                    </div>
                    <div className={style.modalFormField}>
                        <label htmlFor="comment">Коментарий</label>
                        <textarea id="comment" name="comment"
                                  className={classNames(style.modalInput, style.modalTextArea)}
                                  value={isNewApplication ? undefined : this.state.application.comment}
                                  onChange={(event) => this.handleStateChange(event)}/>
                    </div>
                    <div className={style.modalButtons}>
                        <button type="submit" className={classNames(style.modalButton, style.modalButtonSave)}
                                onClick={(e) => this.handleSubmit(e)}>Сохранить
                        </button>
                        <button className={style.modalButton} onClick={() => this.closeModal()}>Закрыть</button>
                    </div>
                </form>
            </Modal>
        )
    }
}