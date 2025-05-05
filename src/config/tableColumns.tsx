export const tableColumns = [
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
    }
];

export const tableData = [
    { id: 1, cell_one: "Cell 101", cell_two: "Cell 102", cell_three: "Cell 103" },
    { id: 2, cell_one: "Cell 201", cell_two: "Cell 202", cell_three: "Cell 203" },
];
