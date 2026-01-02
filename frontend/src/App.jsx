import { useState } from 'react'
import './App.css'

const API_URL = "https://mern-web-app-task.onrender.com/contact";
function App() {
  const [form, setForm] = useState({
    username : "",
    email: "",
    phone:"",
    message:""
  })

  const [errors, setErrors] = useState({});
  const [contacts, setContacts] = useState([]);

  const isFormValid =
  form.username.trim() !== "" &&
  form.phone.trim() !== "" ;

const validate = () => {
  let err = {};
  if (!form.username) err.name = "Name is required";
  if (!form.phone) err.phone = "Phone is required";
  if (form.email && !/\S+@\S+\.\S+/.test(form.email))
    err.email = "Invalid email";
  setErrors(err);
  return Object.keys(err).length === 0;
};


const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prevForm) => ({
    ...prevForm,
    [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });
  
 
  const data = await res.json()
  setContacts([data, ...contacts]);
  setForm({ username: "", email: "", phone: "", message: "" });
};


  return (
    <>
     <h1>CONTACT FORM</h1>
   <form onSubmit={handleSubmit}>
    <label htmlFor = "name">Name:</label>
  <input
    name="username"
    value={form.username}
    onChange={handleChange}
  />

  <label htmlFor = "email">Mail:</label>
  <input
    name="email"
    value={form.email}
    onChange={handleChange}
  />
  <label htmlFor = "phone">Phone:</label>
    <input
    name="phone"
    value={form.phone}
    onChange={handleChange}
  />
  <label htmlFor = "message">Message:</label>
    <input
    name="message"
    value={form.message}
    onChange={handleChange}
  />

 {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
{errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
{errors.email && <span style={{ color: "red" }}>{errors.email}</span>}


  <button
    type="submit"
    disabled={!isFormValid}
  >
    Submit
  </button>
</form>

<h3>Submitted Contacts</h3>

<ul>
  {contacts.map((c, index) => (
    <li key={index}>
      <strong>{c.name}</strong> — {c.phone} — {c.email}
    </li>
  ))}
</ul>

      
    </>
  )


  
}



export default App
