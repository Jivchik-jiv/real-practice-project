import * as React from "react";
import { useDispatch } from "react-redux";
import styles from "./Contacts.module.css";
import { fetchContacts, deleteContact } from "./ContactsThunks";
import Modal from "../common/Modal/Modal";
import ContactsList from "./ContactsList";
import ContactEditorForm from "./ContactEditorForm";

const Contacts = () => {
  const [showContactEditor, setShowContactEditor] = React.useState(false);
  const [showChangeContact, setShowChangeContact] = React.useState(false);
  const [activeContactIndex, setActiveContactIndex] = React.useState(0);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id: string, index: number) => {
    dispatch(deleteContact({ id, index }));
  };

  return (
    <div className={styles.contactsWrap}>
      <h1>Contacts</h1>
      <button onClick={() => setShowContactEditor(true)} className={styles.btn}>
        Add contact
      </button>

      <ContactsList
        onDelete={handleDelete}
        onUpdate={(contactIndex) => {
          setActiveContactIndex(contactIndex);
          setShowChangeContact(true);
        }}
      />

      {showContactEditor && (
        <Modal closeModal={() => setShowContactEditor(false)}>
          <ContactEditorForm closeModal={() => setShowContactEditor(false)} />
        </Modal>
      )}

      {showChangeContact && (
        <Modal closeModal={() => setShowChangeContact(false)}>
          <ContactEditorForm
            contactIndex={activeContactIndex}
            closeModal={() => setShowChangeContact(false)}
          />
        </Modal>
      )}
      {/* {showContactEditor&&<Modal closeModal={()=>setShowContactEditor(false)}>
            <ContactEditor closeModal={()=>setShowContactEditor(false)}/>
            </Modal>} */}

      {/* {showChangeContact&&<Modal closeModal={()=>setShowChangeContact(false)}>
            <ChangeContact contact={activeContact} closeModal={()=>setShowChangeContact(false)}/>
            </Modal>} */}
    </div>
  );
};

export default Contacts;
