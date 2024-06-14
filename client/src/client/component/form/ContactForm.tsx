import { useState } from "react";
import { toast } from "react-toastify";
import Axios from "../../../services/axios";
// import { AxiosResponse } from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [msg, setMsg] = useState("");

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    if (!name && !email && !object && !msg) {
      toast.error("Veuillez remplir tous les champs.", { position: "top-right" });
    } else if (!email) {
      toast.warning("Veuillez fournir une adresse e-mail.", { position: "top-right" });
    } else if (!name) {
      toast.warning("Veuillez fournir un nom d'utilisateur.", { position: "top-right" });
    } else if (!object) {
      toast.warning("Veuillez fournir un objet.", { position: "top-right" });
    } else if (!msg) {
      toast.warning("Veuillez fournir un message.", { position: "top-right" });
    } else {
      try {
        const response = await Axios.post("/contact", {
          name,
          email,
          object,
          body: msg,
          seen: false,
        });

        if (response.status === 201) {
          toast.success("Informations soumises avec succès !", { position: "top-right" });
          setName("");
          setEmail("");
          setObject("");
          setMsg("");
        }
      } catch (error) {
        toast.error("Erreur lors de la soumission des informations.", { position: "top-right" });
      }
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
            type="text"
            name="stud-object"
            id="tl-7-stud-object"
            placeholder="Objet"
            value={object}
            onChange={(e) => setObject(e.target.value)}
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
