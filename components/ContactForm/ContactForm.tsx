"use client"

import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form";

import { FormData } from "@/utils/types";
import { ContactFormInfo } from "@/utils/staticData/contacts";

import { FormButton } from "@/components/FormButton/FormButton";
import { FormInput } from "@/components/FormInput/FormInput";
import { FormTextArea } from "../FormTextArea/FormTextArea";

export const ContactForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const { formContent: { inputs, textarea } } = ContactFormInfo;
    
    const onSubmit = (data: FormData) => {
        reset();
        toast.success(`Thanks, ${data.name}, your message was sent! We will get back to you within 24 hours.`);
    }

    return (
        <form 
            className="flex flex-col 
                tab:flex-row tab:gap-5 
                desk:w-1/2 desk:flex-col desk:gap-10"
            onSubmit={handleSubmit(onSubmit)}
            aria-label="Contact"
            noValidate
        >
            <div className="flex flex-col desk:flex-row desk:gap-5">

                {inputs.map(inputInfo => 
                    <div className="mb-6 flex flex-col relative desk:mb-0" key={inputInfo.id}>
                        <FormInput 
                            inputInfo={inputInfo}
                            inputStyles="desk:w-[293px]"
                            register={register}
                            errors={errors}
                        />
                    </div>
                )}
            </div>
            
            <div className="flex flex-col">
                <FormTextArea 
                    textarea={textarea}
                    textAreaStyles="mb-4 min-h-[193px] tab:w-[463px] tab:min-h-[221px] desk:w-[607px] desk:min-h-[174px] desk:mb-6"
                    register={register}
                />

                <FormButton 
                    btnStyles="desk:mr-2"
                />

            </div>
        </form>
    )
}