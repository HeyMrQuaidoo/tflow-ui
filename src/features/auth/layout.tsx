import { FC } from "react"
import { CustomButton } from "@/components"
import { AuthLayoutProps } from "@/interfaces"
import { useNavigate } from "react-router-dom"


export const AuthLayout: FC<AuthLayoutProps> = ({ authType, authLabel, children, btnLabel, clickEvent }) => {
    const navigate = useNavigate();
    const signin = authType === "signin";

    const handleNavigation = (route: string) => {
        navigate(route);
    }

    return (
        <section className="h-full py-8 px-12 flex flex-col items-center justify-center gap-12">
            <div className="p-8 w-full md:w-1/2 2xl:w-3/5 flex flex-col gap-6 border border-strokeSoft rounded-xl shadow-md">
                <h2 className="text-2xl font-medium">{authLabel}</h2>
                <div className="flex flex-col gap-3">
                    {children}
                </div>
                <div className="grid gap-2">
                    <CustomButton
                        btnType="submit"
                        variant="primary"
                        label={btnLabel} fullWidth
                        clickEvent={clickEvent}
                    />
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <p className="text-textMuted">
                            {signin ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <p role="button" onClick={() => handleNavigation(signin ? "/sign-up" : "/")} className="text-primary font-medium underline">
                            {signin ? "Register" : "Signin"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
