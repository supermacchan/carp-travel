"use client"

import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form";

import { FormData } from "@/utils/types";
import { CareerFormInfo } from "@/utils/staticData/career";

import { FormInput } from "@/components/FormInput/FormInput";
import { FormTextArea } from "@/components/FormTextArea/FormTextArea";
import { FormPolicy } from "@/components/FormPolicy/FormPolicy";
import { FormButton } from "@/components/FormButton/FormButton";

export const CareerForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const { description, formContent: { inputs, textarea, policy } } = CareerFormInfo;
    
    const onSubmit = (data: FormData) => {
        reset();
        toast.success(`Thanks, ${data.name}, your message was sent! We will get back to you within 24 hours.`);
    }

    return (
        <>
            <p 
                className="ml-auto mb-9 w-[179px] text-sm font-extralight leading-5
                    tab:ml-0 tab:mb-[28px] tab:w-[221px] tab:text-[13px] tab:leading-[20px]
                    desk:mb-[14px] desk:w-[234px] desk:text-lg desk:leading-6"
            >
                {description}
            </p>
        
            <form 
                className="flex flex-col tab:w-[464px] tab:grid tab:grid-cols-2 tab:gap-x-5 desk:w-[606px]"
                onSubmit={handleSubmit(onSubmit)}
                aria-label="Career"
                noValidate
            >
                <div className="flex flex-col">

                    {inputs.map(inputInfo => 
                        <div className="mb-4 flex flex-col relative desk:mb-[26px]" key={inputInfo.id}>
                            <FormInput 
                                inputInfo={inputInfo}
                                register={register}
                                errors={errors}
                            />
                        </div>
                    )}
                </div>
                
                <div className="mb-4 flex flex-col tab:mb-0">
                    <FormTextArea 
                        textarea={textarea}
                        textAreaStyles="min-h-[196px] tab:min-h-[244px] desk:w-[292px] desk:min-h-[274px]"
                        register={register}
                    />
                </div>

                {policy && 
                    <FormPolicy 
                        policy={policy}
                        register={register}
                        errors={errors}
                    />
                }

                <FormButton 
                    btnStyles="mt-4 tab:m-0 tab:absolute tab:bottom-[15px] tab:right-[3px] 
                    desk:bottom-[21px] desk:right-0 desk:text-[32px]"
                />
        
            </form>
        </>
    )
}