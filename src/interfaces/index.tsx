import { JSX, ReactNode } from "react";
import { Control, FieldErrors } from "react-hook-form"


type AuthType = "signin" | "signup" | "reset-password";

export interface AuthLayoutProps {
    authLabel: string;
    isLoading?: boolean;
    authType?: AuthType;
    children: ReactNode;
    isDisabled?: boolean;
    btnLabel: string;
    clickEvent: () => void;
}

export type ButtonVariantType = "primary" | "secondary" | "custom";

export interface CustomButtonProps {
    btnType: "submit" | "button";
    variant: ButtonVariantType;
    label: string | undefined;
    iconLeft?: any;
    iconRight?: any;
    border?: boolean;
    clickEvent?: () => void;
    customStyle?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    fullWidth?: boolean;
}

export interface CustomSelectOption {
    value: number;
    label: string;
}

export interface EmailInputProps {
    control: Control<any>;
    errors: FieldErrors;
    name?: string;
    row?: boolean;
    label?: string;
}

export interface PasswordInputProps {
    validationText?: boolean;
    control: Control<any>;
    errors: FieldErrors;
    placeholder?: string;
    required?: boolean;
    label?: string;
    name?:string;
}

export interface TextInputProps {
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
    extraMessage?: string;
    control: Control<any>;
    errors: FieldErrors;
    rules?: any;
    components?: any;
    defaultValue?: any;
    options?: CustomSelectOption[];
    row?: boolean;
    readOnly?: boolean;
    required?: boolean;
    isCreatable?: boolean;
    isClearable?: boolean;
    isMultipleSelection?: boolean;
    onChange?: (value: string) => void;
}


export interface BaseColumn<T> {
    title: string;
    dataIndex: keyof T | string;
    className?: string;
}

export interface TableColumn<T> extends BaseColumn<T> {
    render?: (value: any, record: T, additionalProps?: any) => JSX.Element | string;
    cellClassName?: (value: any, record: T, index: number) => string | undefined;
}

export type CustomTableProps<T> = {
    data: T[];
    columns: TableColumn<T>[];
    rowClassName?: (record: T, index: number) => string;
    tableClassName?: string;
    headerClassName?: string;
    onRowClick?: (item: T) => void;
    onCellClick?: (item: T) => void;
    showPagination?: boolean;
}

export interface PaginationProps {
    totalRows: number;
    rowsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rows: CustomSelectOption) => void;
}


export interface ProfileSectionProps {
    initials: string;
    authorisedUser: any;
    clickEvent: () => void;
}


export interface BasicModalProps {
    isModalOpen: boolean;
    onCloseModal: (e?: any) => void;
    nonDismissable?: boolean;
}

export interface ModalLayoutProps extends BasicModalProps {
    id: string;
    modalHeader?: string | ReactNode;
    subHeading?: string;
    children: ReactNode;
    footerText?: string;
    bodyClasses?: string;
    positionClasses?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    isValid?: boolean;
    footer?: boolean;
    actionBtnText?: string;
    actionBtnOnly?: boolean;
    handleSubmit?: () => void | Promise<void>;
}

export interface NoRecordProps {
    genericMessage?: boolean;
    message?: string;
    iconSize: number;
    altText: string;
}

export interface DashboardCardsProps {
    headerTitle: string;
    cardValue: number;
    cardPercentage: number;
    chartData: number[];
    series: { name: string; data: number[]; }[];
}

export interface DashboardBannerProps {
    chartCardData: DashboardCardsProps[];
}

export interface WeeklyChartProps {
    headerTitle: string;
    chartData: ApexAxisChartSeries;
}

export * from "./transactions";
export interface RecentTransactionProps {
    recentTName: string;
    recentTDate: string;
    recentTAmount: number; 
    data: object[]
}

export interface ServiceCardsProps {
    serviceTitle: string;
    btnType: "Details" | "button";
    imageUrl: string;
}


// ---------- store interface(s) ---------- //
export interface AuthStoreInterface {
    error: string | null;
    isAuthLoading: boolean;
    authorisedUser: any;
    setActiveUser: (user: any) => void;
}
