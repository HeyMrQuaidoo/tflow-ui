import { defaultIconSize } from "."
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri"


export const tableColumns = (
    handleDelete: (recordId: string) => void,
) => [
    {
        title: "Header I",
        dataIndex: "cell_one",
        render: (value: string) => <p>{value}</p>,
    },
    {
        title: "Header II",
        dataIndex: "cell_two",
        render: (value: string) => <p>{value}</p>,
    },
    {
        title: "Header III",
        dataIndex: "cell_three",
        render: (value: string) => <p>{value}</p>,
    },
    {
        title: "Actions",
        dataIndex: "actions",
        render: (_: any, value: any) => (
            <div className="flex items-center gap-3 text-textMuted">
                <RiEditLine role="button" size={defaultIconSize} />
                <RiDeleteBinLine role="button" size={defaultIconSize} onClick={() => handleDelete(value?.id)} />
            </div>
        ) 
    }
];

export const tableData = [
    { id: 1, cell_one: "Cell 101", cell_two: "Cell 102", cell_three: "Cell 103" },
    { id: 2, cell_one: "Cell 201", cell_two: "Cell 202", cell_three: "Cell 203" },
];
