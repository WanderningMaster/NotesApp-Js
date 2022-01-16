import {addEventToDelButtons} from "./delButton"
import {addEventToEditButtons} from ".//editButton"
import {addEventToArchiveButtons, addEventToShowArchiveButton} from "./archiveButton"
import { addEventToAddButton } from "./addButton";

const addAllEvents = () => {
    addEventToEditButtons();
    addEventToDelButtons();
    addEventToArchiveButtons();
    addEventToShowArchiveButton();
    addEventToAddButton();
}

export {addAllEvents};