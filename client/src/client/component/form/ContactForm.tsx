import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [msg, setMsg] = useState("");
  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (!name && !email && !age && !number && !msg) {
      toast.error("Veuillez remplir tous les champs.", { position: "top-right" });
    } else if (!email) {
      toast.warning("Veuillez fournir une adresse e-mail.", { position: "top-right" });
    } else if (!name) {
      toast.warning("Veuillez fournir un nom d'utilisateur.", { position: "top-right" });
    } else if (!age) {
      toast.warning("Veuillez fournir l'âge.", { position: "top-right" });
    } else if (!number) {
      toast.warning("Veuillez fournir un numéro d'utilisateur.", { position: "top-right" });
    } else if (!msg) {
      toast.warning("Veuillez fournir un message utilisateur.", { position: "top-right" });
    } else {
      // If the form is successfully submitted, show a success toast
      toast.success("Informations soumises avec succès !", { position: "top-right" });
      setName("");
      setEmail("");
      setAge("");
      setNumber("");
      setMsg("");
    }
  };
  return (
    <form className="tl-7-contact-form" onSubmit={handleFormSubmit}>
      <div className="row g-3 g-md-4">
        <div className="col-6 col-xxs-12">
          <input
            type="text"
            name="stud-name"
            id="tl-7-stud-name"
            placeholder="Votre Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-6 col-xxs-12">
          <input
            type="email"
            name="stud-mail"
            id="tl-7-stud-mail"
            placeholder="Votre Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-6 col-xxs-12">
          <input
            type="number"
            name="stud-age"
            id="tl-7-stud-age"
            placeholder="Votre Âge"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="col-6 col-xxs-12">
          <input
            type="tel"
            name="stud-number"
            id="tl-7-stud-namer"
            placeholder="Votre Numéro"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="col-12">
          <textarea
            name="stud-message"
            id="tl-7-stud-message"
            placeholder="Votre Message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </div>

        <div className="col">
          <button type="submit" className="tl-7-def-btn">
            Envoyer le Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
