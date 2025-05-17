

/*
import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

function AdminPanel() {
  const { students, setStudents } = useContext(StudentContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    promo: '',
    photo: '',
    customLink: '' // Nouveau champ pour le lien personnalisé
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    const newStudent = { ...form, id: Date.now() }; // Ajout d'un ID unique
    setStudents([...students, newStudent]);
    setForm({ name: '', email: '', phone: '', promo: '', photo: '', customLink: '' });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} />
        <input type="text" name="promo" placeholder="Promo" value={form.promo} onChange={handleChange} />
        <input type="text" name="customLink" placeholder="Lien personnalisé" value={form.customLink} onChange={handleChange} />
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des étudiants</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} <button onClick={() => handleDelete(student.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

*/


/*

import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import jsPDF from 'jspdf';

function AdminPanel() {
  const { students, setStudents } = useContext(StudentContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    promo: '',
    photo: '',
    customLink: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    const newStudent = { ...form, id: Date.now() };
    setStudents([...students, newStudent]);
    setForm({ name: '', email: '', phone: '', promo: '', photo: '', customLink: '' });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleExportPDF = (student) => {
    const doc = new jsPDF();
    doc.text(`Nom: ${student.name}`, 10, 10);
    doc.text(`Email: ${student.email}`, 10, 20);
    doc.text(`Téléphone: ${student.phone}`, 10, 30);
    doc.text(`Promo: ${student.promo}`, 10, 40);

    if (student.photo) {
      const img = new Image();
      img.src = student.photo;
      img.onload = () => {
        doc.addImage(img, 'JPEG', 10, 50, 50, 50);
        doc.save(`${student.name}_fiche.pdf`);
      };
    } else {
      doc.save(`${student.name}_fiche.pdf`);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} />
        <input type="text" name="promo" placeholder="Promo" value={form.promo} onChange={handleChange} />
        <input type="text" name="customLink" placeholder="Lien personnalisé" value={form.customLink} onChange={handleChange} />
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des étudiants</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => handleDelete(student.id)}>Supprimer</button>
            <button onClick={() => handleExportPDF(student)}>Exporter en PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

*/


import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import jsPDF from 'jspdf';

function AdminPanel() {
  const { students, setStudents } = useContext(StudentContext);
  const [form, setForm] = useState({
    name: '',
    firstName: '', // Nouveau champ pour le prénom
    matricule: '', // Nouveau champ pour le matricule
    speciality: '', // Nouveau champ pour la spécialité
    email: '',
    phone: '',
    promo: '',
    photo: '',
    customLink: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.firstName || !form.matricule || !form.speciality) return;
    const newStudent = { ...form, id: Date.now() };
    setStudents([...students, newStudent]);
    setForm({
      name: '',
      firstName: '',
      matricule: '',
      speciality: '',
      email: '',
      phone: '',
      promo: '',
      photo: '',
      customLink: ''
    });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleExportPDF = (student) => {
    const doc = new jsPDF();
    doc.text(`Nom: ${student.name}`, 10, 10);
    doc.text(`Prénom: ${student.firstName}`, 10, 20);
    doc.text(`Matricule: ${student.matricule}`, 10, 30);
    doc.text(`Spécialité: ${student.speciality}`, 10, 40);
    doc.text(`Email: ${student.email}`, 10, 50);
    doc.text(`Téléphone: ${student.phone}`, 10, 60);
    doc.text(`Promo: ${student.promo}`, 10, 70);

    if (student.photo) {
      const img = new Image();
      img.src = student.photo;
      img.onload = () => {
        doc.addImage(img, 'JPEG', 10, 80, 50, 50);
        doc.save(`${student.name}_${student.firstName}_fiche.pdf`);
      };
    } else {
      doc.save(`${student.name}_${student.firstName}_fiche.pdf`);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} required />
        <input type="text" name="firstName" placeholder="Prénom" value={form.firstName} onChange={handleChange} required />
        <input type="text" name="matricule" placeholder="Matricule (Ex: 23U2675)" value={form.matricule} onChange={handleChange} required />
        <input type="text" name="speciality" placeholder="Spécialité" value={form.speciality} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} />
        <input type="text" name="promo" placeholder="Promo" value={form.promo} onChange={handleChange} />
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des étudiants</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} {student.firstName} - {student.matricule} ({student.speciality})
            <button onClick={() => handleDelete(student.id)}>Supprimer</button>
            
            <button onClick={() => handleExportPDF(student)}>Exporter en PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;