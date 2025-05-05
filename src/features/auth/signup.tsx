import { FC } from "react"
import { AuthLayout } from "./layout"
import { useForm } from "react-hook-form"
import { EmailInput, PasswordInput, TextInput } from "@/components"


export const SignUp: FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = () => {}

    return (
        <AuthLayout authType="signup" authLabel="Sign Up" btnLabel="Sigup" clickEvent={handleSubmit(onSubmit)}>
            <TextInput 
                required
                name="first_name"
                control={control}
                errors={errors}
                label="First Name"
            />
            <TextInput 
                required
                name="last_name"
                control={control}
                errors={errors}
                label="Last Name"
            />
            <EmailInput 
                name="email"
                control={control}
                errors={errors}
            />
            <PasswordInput 
                control={control}
                errors={errors}
            />
        </AuthLayout>
    );
}