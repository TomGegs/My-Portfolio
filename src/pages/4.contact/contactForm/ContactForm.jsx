import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ handleSubmit }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userEmail: '',
        message: '',
    });

    const submitButtonText = [
        'Sending...',
        'Beans grinding...',
        'Steaming milk...',
        'Pouring coffee...',
        'Sent!',
    ];

    const [isLoading, setIsLoading] = useState(false);
    const [buttonTextIndex, setButtonTextIndex] = useState(0);

    const form = useRef(null);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(serviceId, templateId, form.current, userId).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();

        setButtonTextIndex((prevIndex) => {
            return (prevIndex + 1) % submitButtonText.length;
        });

        setTimeout(() => {
            setIsLoading(false);
            handleSubmit();
        }, 2000);
    };

    return (
        <form
            ref={form}
            onSubmit={onSubmit}
            className="mb-4 w-full rounded pt-6 text-black shadow-md lg:w-[90%]"
        >
            <div className="mb-4 flex flex-col lg:flex-row ">
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    placeholder="First name"
                    className="focus:shadow-outline mb-4 appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none lg:mb-0 lg:mr-2 lg:w-[50%]"
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    placeholder="Last name"
                    className="focus:shadow-outline appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none lg:ml-2 lg:w-[50%]"
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    placeholder="Email address"
                    className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
            </div>
            <div className="mb-3">
                <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What would you like to chat about?"
                    className="focus:shadow-outline w-full resize-none appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
            </div>
            <div className="relative">
                <div className="absolute bottom-0 left-0 h-12 w-[100%] animate-gradientFast bg-gradient-to-r from-primary via-altSecond to-secondary blur-md lg:h-16" />
                <button
                    className="delay-50 relative my-2 flex w-[100%] transform cursor-pointer justify-center rounded-lg bg-bgPrimary px-[16px] py-3 text-center font-encode text-[0.8rem] font-light text-white transition-all hover:border-altSecond hover:bg-altSecond hover:text-white focus:outline-none active:translate-y-0.5 active:scale-[98%] lg:px-8 lg:py-4 lg:text-lg"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? submitButtonText[buttonTextIndex] : 'Submit'}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
