"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) setStatus('Thanks! We will get back to you.');
    else setStatus('Something went wrong. Please try again.');
  }

  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form action={onSubmit} className="card p-6 max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <button className="btn-primary" type="submit">Send</button>
        {status && <p className="text-sm text-slate-600">{status}</p>}
      </form>
    </section>
  );
}
