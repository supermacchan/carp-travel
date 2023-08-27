"use client"

import Image from "next/image"
import { toast } from "react-hot-toast"

import { useForm } from "react-hook-form";

import { CareerFormData } from "@/app/utils/types";

export const CareerForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CareerFormData>();
    
    const onSubmit = (data: CareerFormData) => {
        // data logged for development purposes
        console.log(data);
        reset();
        toast.success(`Thanks, ${data.name}, your message was sent! We will get back to you within 24 hours.`);
    }

    return (
        <>
            <p className="ml-auto mb-9 w-[179px] text-sm font-extralight leading-5
                tab:ml-0 tab:mb-[28px] tab:w-[221px] tab:text-[13px] tab:leading-[20px]
                desk:mb-[14px] desk:w-[234px] desk:text-lg desk:leading-6">
                Don&apos;t miss your opportunity! 
                Fill out the form right now and join our team!
            </p>
        
            <form 
                className="flex flex-col tab:w-[464px] tab:grid tab:grid-cols-2 tab:gap-x-5
                    desk:w-[606px]"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div className="flex flex-col">
                    <div className="flex flex-col relative mb-4 desk:mb-[26px]">
                        <label htmlFor="career-name" className="label">
                            Full name
                        </label>
                        <input 
                            id="career-name"
                            type="text"
                            autoComplete="name"
                            placeholder="John Smith"
                            className={`input ${errors.name ? 'invalid-input' : ''}`}
                            {...register("name", { required: true })}
                        />
                        {errors.name && 
                            <div className="validation-error bottom-0">
                                Incorrect name
                            </div>
                        }
                    </div>

                    <div className="flex flex-col relative mb-4 desk:mb-[26px]">
                        <label htmlFor="career-mail" className="label">
                            E-mail
                        </label>
                        <input 
                            id="career-mail"
                            type="email" 
                            autoComplete="email"
                            placeholder="johnsmith@email.com"
                            className={`input ${errors.email ? 'invalid-input' : ''}`}
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

                    <div className="flex flex-col mb-4 desk:mb-[26px]">
                        <label htmlFor="career-position" className="label">
                            Position
                        </label>
                        <input 
                            id="career-position"
                            type="text" 
                            autoComplete="on"
                            placeholder="Movie maker"
                            className="input"
                            {...register("position")}
                        />
                    </div>
                    
                    <div className="flex flex-col relative mb-4 desk:mb-[26px]">
                        <label 
                            htmlFor="career-phone" 
                            className="label relative
                                after:absolute after:bottom-[-30px] after:left-2 after:content-['+38']
                                after:text-[13px] after:font-extralight after:leading-6 after:tracking-wide after:text-white desk:after:text-[20px] desk:after:leading-6"
                        >
                            Phone
                        </label>
                        <input 
                            id="career-phone"
                            type="tel" 
                            autoComplete="tel"
                            placeholder="(097) 12 34 567"
                            className={`input ${errors.phone ? 'invalid-input' : ''} sm-mob:pl-9 desk:pl-[50px]`}
                            {...register("phone", { 
                                required: true,
                                pattern: /^[0-9\s()]+$/,
                                minLength: 7
                            })}
                        />
                        {errors.phone && 
                            <div className="validation-error bottom-0">
                                Incorrect phone
                            </div>
                        }
                    </div>
                </div>
                
                <div className="flex flex-col mb-4 tab:mb-0">
                    <label htmlFor="career-message" className="label">
                        Message
                    </label>
                    <textarea
                        id="career-message"
                        autoComplete="off"
                        className="input resize-none min-h-[196px] tab:min-h-[244px] desk:w-[292px] desk:min-h-[274px]"
                        {...register("message")}
                    ></textarea>
                </div>

                <div className="desk:pt-[10px] relative">
                    <input 
                        type="checkbox" 
                        id="career-policy" 
                        className="policy-check" 
                        {...register("consent", { 
                            required: true,
                        })} 
                    />
                    <label 
                        htmlFor="career-policy"
                        className="policy-agreement pl-8 relative flex text-xs font-extralight leading-[22px] desk:leading-6"
                    >
                        <Image src="/icons/unchecked.svg" alt="checkbox" width={24} height={24} className="policy-checkbox policy-checkbox-empty"/>
                        <Image src="/icons/checked.svg" alt="checkbox" width={24} height={24} className="policy-checkbox policy-checkbox-filled"/>
                        I confirm my consent to the processing of personal data.
                    </label>
                    {errors.consent && 
                        <div className="validation-error left-5 right-auto">
                            This checkbox is required
                        </div>
                    }
                </div>

                <button 
                    type="submit" 
                    className="ml-auto mt-4 uppercase text-3xl font-medium leading-8 tab:m-0 tab:absolute tab:bottom-[15px] tab:right-[3px] desk:bottom-[21px] desk:right-0 desk:text-[32px]">
                    Send
                </button>
        
            </form>
        </>
    )
}