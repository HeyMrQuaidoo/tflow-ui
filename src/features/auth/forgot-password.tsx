import { FC } from "react"
import { AuthLayout } from "./layout"
import { EmailInput } from "@/components"
import { useForm } from "react-hook-form"


export const ForgotPassword: FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = () => {}
    
    return (
        <AuthLayout authType="reset-password" authLabel="Reset Password" btnLabel="Reset Password" clickEvent={handleSubmit(onSubmit)}>
            <EmailInput 
                control={control}
                errors={errors}
            />
        </AuthLayout>
    );
}