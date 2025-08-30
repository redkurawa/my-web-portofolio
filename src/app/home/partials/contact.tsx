'use client';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { ErrorDialog } from '@/components/ui/dialog-error';
import { SuccessDialog } from '@/components/ui/dialog-success';

import { aboutSosmed } from '@/constants/about-data';

const services = [
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'cloud', label: 'Cloud Solutions' },
  { id: 'soft', label: 'Software Development' },
  { id: 'other', label: 'Other' },
];

export default function Contact() {
  // from porto 5
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
      services: fd.getAll('services').map(String),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());

      // ✅ sukses
      setSuccessOpen(true);
      form.reset();

      toast.success('Message sent', {
        description: 'Thanks! We’ll be in touch shortly.',
      });
    } catch (err: any) {
      // ❌ gagal
      setErrorOpen(true);
      toast.error('Send failed', {
        description: 'We couldn’t send your message. Please try again.',
        action: {
          label: 'Retry',
          onClick: () => formRef.current?.requestSubmit(),
        },
      });
      // console.error(err?.message || err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className='bg-[#0A0D12] pt-20'>
      <div className='custom-container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {/* left */}
          <div className='flex flex-col justify-between'>
            <div className='flex items-center gap-2'>
              <div className=''>
                <Image
                  src='/images/hero-foto.png'
                  alt='foto'
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <p>Edwin Anderson</p>
                <p>edwinanderson@email.com</p>
              </div>
            </div>
            <div>
              <div className='text-display-3xl font-bold'>
                Great results begin with clear ideas.
              </div>
              <div className='mt-6 flex items-center gap-2 md:mt-0'>
                {aboutSosmed.map((data) => (
                  <div
                    key={data.alt}
                    className='flex-center border-primary-200 bg-primary-200 size-10 rounded-full border'
                  >
                    <Image
                      className=''
                      src={data.src}
                      alt={data.alt}
                      width={data.w}
                      height={data.h}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right */}
          <div className=''>
            <Button
              variant='outline'
              size='outline'
              className='text-neutral-25'
            >
              Contact
            </Button>
            <h1 className='text-display-xl font-bold'>
              Start Your Next Project
            </h1>
            {/* from porto 5 */}
            <div className='mx-auto'>
              {/* <FormHeader /> */}
              <div className='mx-auto mt-8'>
                <ContactForm
                  ref={formRef}
                  onSubmit={onSubmit}
                  loading={loading}
                />
              </div>
            </div>

            {/* Portals */}
            <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
            <ErrorDialog
              open={errorOpen}
              onOpenChange={setErrorOpen}
              onRetry={() => formRef.current?.requestSubmit()}
            />
            {/* end porto 5 */}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- START subcomponents ---------- */

// function FormHeader() {
//   return (
//     <header className='text-center'>
//       <h2 className='text-display-sm md:text-display-lg font-semibold'>
//         Ready to Start? Let’s Talk.
//       </h2>
//       <p className='mt-2 text-sm text-white/70 md:text-base'>
//         Tell us what you need, and we’ll get back to you soon.
//       </p>
//     </header>
//   );
// }

const ContactForm = React.forwardRef<
  HTMLFormElement,
  { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; loading: boolean }
>(function ContactForm({ onSubmit, loading }, ref) {
  return (
    <form ref={ref} onSubmit={onSubmit} className='mx-auto mt-8 space-y-6'>
      {/* Name */}
      <div className='space-y-2'>
        <label className='text-sm text-white/80' htmlFor='name'>
          Name
        </label>
        <input
          id='name'
          name='name'
          required
          placeholder='What should I call you?...'
          className='w-full rounded-md border border-white/15 bg-transparent px-3 py-2'
        />
      </div>

      {/* Email */}
      <div className='space-y-2'>
        <label className='text-sm text-white/80' htmlFor='email'>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          placeholder='Where can I reach you? ...'
          className='w-full rounded-md border border-white/15 bg-transparent px-3 py-2'
        />
      </div>

      {/* Message */}
      <div className='space-y-2'>
        <label className='text-sm text-white/80' htmlFor='message'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={1}
          required
          placeholder='Tell me about your project or just say hi :) ...'
          className='w-full rounded-md border border-white/15 bg-transparent px-3 py-2'
        />
      </div>

      {/* Services */}
      {/* <fieldset className='space-y-2'>
        <legend className='text-sm text-white'>Services</legend>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
          {services.map((s) => (
            <label
              key={s.id}
              htmlFor={s.id}
              className='flex cursor-pointer items-center gap-3 text-sm text-white/80'
            >
              <input
                id={s.id}
                name='services'
                type='checkbox'
                value={s.label}
                className='h-4 w-4 rounded border-white/30 bg-transparent'
              />
              {s.label}
            </label>
          ))}
        </div>
      </fieldset> */}

      <Button
        type='submit'
        disabled={loading}
        className='bg-primary-300 hover:bg-primary-200 w-full rounded-full px-4 py-3 font-semibold text-white disabled:opacity-60'
      >
        {loading ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
});

/* ---------- END subcomponents ---------- */
// export default Contact;
