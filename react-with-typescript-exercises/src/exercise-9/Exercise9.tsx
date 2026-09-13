import { useState } from "react";

// 1 Email Form


export interface EmailFormProps {
  onSubmit: (email: string) => void;
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
        />
        <button type="submit" style={{ marginLeft: "8px" }}>
          Submit
        </button>
      </div>
    </form>
  );
}

// 2 Age Form


export interface AgeFormProps {
  onSubmit: (age: number) => void;
}

export function AgeForm({ onSubmit }: AgeFormProps) {

  const [age, setAge] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const parsedValue = parseInt(e.target.value, 10);
    setAge(isNaN(parsedValue) ? 0 : parsedValue);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (age < 18) {
      setErrorMessage("Access denied You must be 18 or older to submit.");
      return;
    }

    setErrorMessage("");
    onSubmit(age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="number"
          value={age === 0 ? "" : age}
          onChange={handleAgeChange}
          placeholder="Enter your age"
        />
        <button type="submit" style={{ marginLeft: "8px" }}>
          Submit
        </button>
      </div>
      {errorMessage && (
        <p style={{ color: "red", marginTop: "6px" }}>{errorMessage}</p>
      )}
    </form>
  );
}

//  Contact Form


export interface ContactFormData {
  name: string;
  email: string;
}

export interface ContactFormProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [data, setData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "8px" }}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
      </div>
      <div style={{ marginBottom: "8px" }}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
      </div>
      <button type="submit">Submit Contact</button>
    </form>
  );
}


// Wrap all questions in Exercise 9 Component


export function Exercise9() {
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [submittedAge, setSubmittedAge] = useState<number | null>(null);
  const [submittedContact, setSubmittedContact] = useState<{
    name: string;
    email: string;
  } | null>(null);

  return (
    <div>
      <h1>Exercise 9</h1>

      <section>
        <h2>Email Form</h2>
        <EmailForm onSubmit={(email) => setSubmittedEmail(email)} />
        {submittedEmail && (
          <p>
            <strong>Submitted Email:</strong> {submittedEmail}
          </p>
        )}
      </section>

      <section>
        <h2>Age Form</h2>
        <AgeForm onSubmit={(age) => setSubmittedAge(age)} />
        {submittedAge !== null && (
          <p>
            <strong>Submitted Age:</strong> {submittedAge}
          </p>
        )}
      </section>

      <section>
        <h2>Contact Form</h2>
        <ContactForm onSubmit={(data) => setSubmittedContact(data)} />
        {submittedContact && (
          <p>
            <strong>Submitted Contact:</strong> {submittedContact.name} (
            {submittedContact.email})
          </p>
        )}
      </section>
    </div>
  );
}

export default Exercise9;
