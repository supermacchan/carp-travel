"use client"

import { toast } from "react-hot-toast"

import { useForm } from "react-hook-form";

import { ContactFormData } from "@/app/utils/types";

export const ContactForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
    
    const onSubmit = (data: ContactFormData) => {
        // data logged for development purposes
        console.log(data);
        reset();
        toast.success(`Thanks, ${data.name}, your message was sent! We will get back to you within 24 hours.`);
    }

    return (
        <form 
            className="flex flex-col tab:flex-row tab:gap-5 
            desk:w-1/2 desk:flex-col desk:gap-10"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div className="flex flex-col desk:flex-row desk:gap-5">
                <div className="flex flex-col relative mb-6 desk:mb-0">
                    <label htmlFor="contact-name" className="label">
                        Full name
                    </label>
                    <input 
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        className={`input ${errors.name ? 'invalid-input' : ''} desk:w-[293px]`}
                        {...register("name", { required: true })}
                    />
                    {errors.name && 
                        <div className="validation-error">
                            Incorrect name
                        </div>
                    }
                </div>
                
                <div className="flex flex-col relative mb-6 tab:mb-0 ">   
                    <label htmlFor="contact-mail" className="label">
                        E-mail
                    </label>
                    <input 
                        id="contact-mail"
                        type="email" 
                        autoComplete="email"
                        placeholder="johnsmith@email.com"
                        className={`input ${errors.email ? 'invalid-input' : ''} desk:w-[293px]`}
                        {...register("email", { 
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                         })}
                    />
                    {errors.email && 
                        <div className="validation-error">
                            Invalid email
                        </div>
                    }
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="contact-message" className="label">
                    Message
                </label>
                <textarea
                    id="contact-message"
                    autoComplete="off"
                    className="input resize-none mb-4 min-h-[193px] 
                    tab:w-[463px] tab:min-h-[221px]
                    desk:w-[607px] desk:min-h-[174px] desk:mb-6"
                    {...register("message")}
                ></textarea>

                <button 
                    type="submit" 
                    className="ml-auto uppercase text-3xl font-medium leading-8 desk:mr-2">
                    Send
                </button>
            </div>
        </form>
    )
}