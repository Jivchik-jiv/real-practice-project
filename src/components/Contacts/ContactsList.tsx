import * as React from "react";
import styles from "./Contacts.module.css";
import { ReactComponent as DeleteButton } from "../../icons/icons8-мусор.svg";
import { ReactComponent as UpdateButton } from "../../icons/icons8-редактировать.svg";
import IconButton from "../common/IconButton/IconButton";
import { useSelector } from "react-redux";
import { selectContacts } from "./ContactsSlice";

type Props = {
  onUpdate: (index: number) => void;
  onDelete: (id: string, index: number) => void;
};

const ContactsList = ({ onUpdate, onDelete }: Props) => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(
        (
          contact: { id: string; name: string; number: string },
          index: number
        ) => {
          return (
            <li key={contact.id} className={styles.item}>
              <p>
                {contact.name} : {contact.number}
              </p>
              <IconButton onClick={() => onDelete(contact.id, index)}>
                <DeleteButton fill="#fff" width="20px" height="20px" />
              </IconButton>
              <IconButton onClick={() => onUpdate(index)}>
                <UpdateButton fill="#fff" width="20px" height="20px" />
              </IconButton>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ContactsList;
