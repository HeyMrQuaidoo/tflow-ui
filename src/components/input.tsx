import { defaultIconSize } from "@/config"
import { FC, useId, useState } from "react"
import { Controller, FieldError, FieldErrors } from "react-hook-form"
import { EmailInputProps, PasswordInputProps, TextInputProps } from "@/interfaces"
import { RiEyeLine, RiEyeOffLine, RiInformationFill, RiLock2Line, RiMailLine } from "react-icons/ri";


function getErrorMessage(errors: FieldErrors, name: string): string | undefined {
    return errors[name] && (errors[name] as FieldError).message;
}

export const TextInput: FC<TextInputProps> = ({ type, name, control, errors, rules, label, defaultValue, required, placeholder, onChange, readOnly }) => {
    const uniqueId = useId();
    const numberField = type === "number";
    
    return (
        <div className="flex flex-grow flex-col gap-1 text-sm">
            {label && (
                <label htmlFor={`${name}-${uniqueId}`} className="text-textBase font-medium">{label} {required && <span className="text-primary">*</span>}</label>
            )}
             <div className={`px-2.5 py-2 bg-white flex items-center gap-2 border border-strokeSoft rounded-lg`}>
                <Controller
                    name={name}
                    control={control}
                    rules={rules ?? (required && { required: `${label?.toLowerCase()} is required` })}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <input
                            {...field}
                            id={`${name}-${uniqueId}`}
                            type={type ?? "text"}
                            value={field.value || ""}
                            placeholder={placeholder || `Enter your ${label?.toLowerCase()}`}
                            min={numberField ? "0" : undefined}
                            className="w-full outline-none bg-white" 
                            onChange={e => {
                                const value = e.target.value;
                                const numValue = parseFloat(value);
                                if (numberField && numValue < 0) {
                                    field.onChange(0);
                                } else {
                                    field.onChange(value);
                                }
                                if (onChange) onChange(value);
                            }} 
                            readOnly={readOnly} 
                        />
                    )}
                />
            </div>
            {errors[name] && <p className="text-xs text-red-600">{getErrorMessage(errors, name)}</p>}
        </div>
    );
}

export const EmailInput: FC<EmailInputProps> = ({ control, errors, name="email", label="Email Address", row }) => {
    const uniqueId = useId();

    return (
        <div className={`${row ? "grid grid-cols-2 gap-4" : "flex flex-col gap-1"} text-sm`}>
            {label && <label htmlFor={`${name}-${uniqueId}`} className="text-textBase font-medium">{label ?? "Email Address"} <span className="text-primary">*</span></label>}
            <div className="px-2.5 py-2 flex items-center gap-2 border border-strokeSoft rounded-md">
                <RiMailLine size={defaultIconSize} className="text-textMuted" />
                <Controller
                    name={name}
                    control={control}
                    rules={{
                        required: "email is required",
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Entered value does not match email format"
                        }
                    }}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text" 
                            value={field.value || ""}
                            id={`${name}-${uniqueId}`} 
                            placeholder={`Enter your ${label?.toLowerCase()}`} 
                            className={`w-full text-sm focus:outline-none bg-white`}
                        />
                    )}
                />
            </div>
            {errors[name] && <p className="text-xs text-red-600">{getErrorMessage(errors, name)}</p>}
        </div>
    );
}

export const PasswordInput: FC<PasswordInputProps> = ({ control, errors, name="password", label="Password", placeholder, validationText, required=true }) => {
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (value: any) => {
        if (!value) return true;
        const hasMinimumLength = value.length >= 8;
        const hasLetter = /[a-zA-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        return hasMinimumLength && hasLetter && hasNumber || "password must contain at least eight characters, including at least 1 letter and 1 number.";
    };
    
    return (
        <div className="flex flex-col gap-1 text-sm">
            <div className="relative grid gap-1">
                <label htmlFor={name} className="text-textBase">{label ?? "Password"} <span className="text-primary">*</span></label>
                <div className="px-2.5 py-2 flex items-center gap-2 border border-strokeSoft rounded-md">
                    <RiLock2Line size={defaultIconSize} className="text-textMuted" />
                    <Controller
                        name={name}
                        control={control}
                        defaultValue=""
                        rules={{ 
                            required: required ? "password is required" : false, 
                            validate: validatePassword
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                id={name}
                                type={showPassword ? "text" : "password"}
                                placeholder={placeholder ?? `Enter your ${label?.toLowerCase()}`}
                                className="w-full bg-white text-sm focus:outline-none"
                            />
                        )}
                    />
                </div>
                <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-[44%] transform translate-y-1/2 mr-3 cursor-pointer"
                >
                    {showPassword ? <RiEyeLine size={defaultIconSize} className="bg-white text-textMuted" /> : <RiEyeOffLine size={defaultIconSize} className="bg-white text-textMuted" />}
                </div>
            </div>
            {errors[name] ? (
                <p className="text-xs text-red-600">{getErrorMessage(errors, name)}</p>
            ) : validationText ? (
                <p className="flex items-center gap-1 text-xs text-textMuted">
                    <RiInformationFill size={defaultIconSize} className="shrink-0 text-textMuted" /> 
                    <span>Must contain 1 uppercase letter, 1 number, min. 8 characters.</span>
                </p>
            ) : undefined}
        </div>
    );
}