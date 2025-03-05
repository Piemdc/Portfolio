import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useReCaptcha } from "next-recaptcha-v3";

export default function Contact(EmailJsDatas) {
    const form = useRef();
    const [isSent, setIsSent] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const { executeRecaptcha } = useReCaptcha();

    const EmailJsCredentials = EmailJsDatas.EmailJsDatas;

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const token = await executeRecaptcha("form_submit");
            if (!token) {
                throw new Error("Failed to get reCAPTCHA token");
            }

            const formData = new FormData(form.current);
            formData.append('g-recaptcha-response', token);

            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log(formObject)

            emailjs.send(EmailJsCredentials.serviceId, EmailJsCredentials.templateId, formObject, EmailJsCredentials.userId)
                .then((result) => {
                    console.log("Email sent successfully:", result.text);
                    setIsSent(true);
                }, (error) => {
                    console.error("Failed to send email:", error.text);
                    setIsError(true);
                });
        } catch (error) {
            console.error("Error in sendEmail:", error);
            setIsError(true);
        }
    };

    return (
        <section id={'contact'} className={"z-10 py-[60px] min-h-screen lg:py-0 w-full text-primary-content relative"}>
            <div className='relative justify-end px-10 lg:grid grid-cols-2 min-h-screen pt-[60px] lg:pt-0'>
                <div className='text-3xl self-center lg:p-10 text-left relative uppercase lg:col-span-1'>
                    <h2 className='text-primary-content font-title uppercase font-bold text-5xl mb-10 lg:text-left'>Contact</h2>

                    {isSent && <div className={'bg-success/20 text-success text-lg normal-case p-2 mb-4'}>Message envoyé !</div>}
                    {isError && <div className={'bg-error/20 text-error text-lg normal-case p-2 mb-4'}>Un problème est survenu, réessayez plus tard !</div>}

                    {!isSent && (
                        <form ref={form} onSubmit={sendEmail} className={'flex flex-col gap-4 text-xl text-black'}>
                            <label htmlFor='user_name' className='sr-only'>Nom:</label>
                            <input placeholder='John Doe' type="text" name="user_name" required className={'bg-white/80 p-2 placeholder:text-neutral'} />

                            <label htmlFor='user_email' className='sr-only'>Email:</label>
                            <input placeholder='john@doe.com' type="email" name="user_email" required className={'bg-white/80 p-2 placeholder:text-neutral'} />

                            <label htmlFor='message' className='sr-only'>Message</label>
                            <textarea placeholder='Votre message ici' rows="8" name="message" required className={'bg-white/80 p-2 placeholder:text-neutral'} />

                            <button type="submit" className={'bg-primary text-white p-2 w-[200px] mx-auto border border-white hover:border-accent transition-colors duration-500'}>Envoyer</button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}