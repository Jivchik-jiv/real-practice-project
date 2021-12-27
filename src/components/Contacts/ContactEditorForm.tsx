import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Contacts.module.css";
import { selectContacts } from "./ContactsSlice";
import { addContact, changeContact } from "./ContactsThunks";

type Props = {
  closeModal: () => void;
  contactIndex?: number;
};

const ContactEditorForm = ({ closeModal, contactIndex = NaN }: Props) => {
  const contacts = useSelector(selectContacts);
  const [name, setName] = React.useState(
    Number.isNaN(contactIndex) ? "" : contacts[contactIndex].name
  );
  const [number, setNumber] = React.useState(
    Number.isNaN(contactIndex) ? "" : contacts[contactIndex].number
  );

  const isUniq = () => {
    if (contactIndex + 1) {
      return !contacts.find(
        (
          contact: { name: string; number: string; id: string },
          index: number
        ) => {
          if (index === contactIndex) return false;
          return contact.name === name;
        }
      );
    }

    return !contacts.find(
      (contact: { name: string; number: string; id: string }) =>
        contact.name === name
    );
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUniq()) {
      if (contactIndex) {
        dispatch(
          changeContact({ name, number, id: contacts[contactIndex].id })
        );
        closeModal();
      } else {
        dispatch(addContact({ name, number }));
        closeModal();
      }
    } else {
      alert(
        "Such name already exists, please choose another name for the contact!"
      );
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </label>

      <label>
        <p>Number</p>
        <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          required
        />
      </label>
      <button type="submit" className={styles.formBtn}>
        {contactIndex + 1 ? "Update" : "Add"} contact
      </button>
    </form>
  );
};

export default ContactEditorForm;
