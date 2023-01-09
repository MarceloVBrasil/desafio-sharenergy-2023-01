export type ModalType = {
    show: boolean,
    setShowModal: (value: boolean) => void,
    message?: string
    onClick?: React.FormEventHandler
}