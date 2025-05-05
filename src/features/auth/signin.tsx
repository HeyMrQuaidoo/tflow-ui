import { FC } from "react"
import { AuthLayout } from "./layout"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { EmailInput, PasswordInput } from "@/components"


export const SignIn: FC = () => {
    const navigate = useNavigate();
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = () => {
        navigate("/app/overview");
    }
    
    return (
        <AuthLayout authType="signin" authLabel="Sign In" btnLabel="Sign in" clickEvent={handleSubmit(onSubmit)}>
            <EmailInput 
                name="email"
                control={control}
                errors={errors}
            />
            <PasswordInput 
                control={control}
                errors={errors}
            />
            <div className="flex items-center justify-between gap-x-12 text-sm text-textSecondary">
                <p></p>
                <p role="button" onClick={() => navigate("/reset-password")} className="font-medium underline">Forgot password?</p>
            </div>
        </AuthLayout>
    );
}