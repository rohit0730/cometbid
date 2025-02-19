// "use client"

// import React from "react";
// import { useState } from "react";
// import { useTable, usePagination, useSortBy, Column } from "react-table";
// import "./style.css";
// import { MdRefresh, MdAdd, MdKeyboardArrowDown, MdOutlineDeleteOutline, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
// import { BiSolidFilePdf, BiEditAlt } from "react-icons/bi";
// import { FaFileCsv } from "react-icons/fa";
// import { TbEye } from "react-icons/tb";

// type DataType = {
//     id: number;
//     name: string;
//     age: number;
//     status: string;
//     jobTitle: string;
//     lastLogin: string;
//     joinDate: string;
//     role: string;
// };


// const columns: Column<DataType>[] = [
//     {
//         Header: "",
//         id: "checkbox",
//         Cell: ({ row }: { row: any }) => (
//             <input type="checkbox" checked={row.isSelected} onChange={() => row.toggleRowSelected()} />
//         ),
//     },
//     { Header: "ID", accessor: "id" },
//     { Header: "Name", accessor: "name" },
//     { Header: "Status", accessor: "status" },
//     { Header: "Job Title", accessor: "jobTitle" },
//     { Header: "Last login", accessor: "lastLogin" },
//     { Header: "Join Date", accessor: "joinDate" },
//     { Header: "Role", accessor: "role" },
// ];

// const data: DataType[] = [
//     { id: 1, name: "Alice", age: 25, status: "Active", jobTitle: "Software Engineer", lastLogin: "2022-01-01", joinDate: "2021-01-01", role: "Admin" },
//     { id: 2, name: "Bob", age: 30, status: "Inactive", jobTitle: "Product Manager", lastLogin: "2022-02-01", joinDate: "2021-02-01", role: "User" },
//     { id: 3, name: "Charlie", age: 35, status: "Active", jobTitle: "Designer", lastLogin: "2022-03-01", joinDate: "2021-03-01", role: "Admin" },
//     { id: 4, name: "David", age: 40, status: "Inactive", jobTitle: "Developer", lastLogin: "2022-04-01", joinDate: "2021-04-01", role: "User" },
//     { id: 5, name: "Eve", age: 45, status: "Active", jobTitle: "Tester", lastLogin: "2022-05-01", joinDate: "2021-05-01", role: "Admin" },
//     { id: 6, name: "Frank", age: 50, status: "Inactive", jobTitle: "Manager", lastLogin: "2022-06-01", joinDate: "2021-06-01", role: "User" },
//     { id: 7, name: "Grace", age: 55, status: "Active", jobTitle: "Architect", lastLogin: "2022-07-01", joinDate: "2021-07-01", role: "Admin" },
//     { id: 8, name: "Henry", age: 60, status: "Inactive", jobTitle: "Analyst", lastLogin: "2022-08-01", joinDate: "2021-08-01", role: "User" },
//     { id: 9, name: "Ivy", age: 65, status: "Active", jobTitle: "Developer", lastLogin: "2022-09-01", joinDate: "2021-09-01", role: "Admin" },
//     { id: 10, name: "Jack", age: 70, status: "Inactive", jobTitle: "Designer", lastLogin: "2022-10-01", joinDate: "2021-10-01", role: "User" },
//     { id: 11, name: "Kate", age: 75, status: "Active", jobTitle: "Tester", lastLogin: "2022-11-01", joinDate: "2021-11-01", role: "Admin" },
//     { id: 12, name: "Liam", age: 80, status: "Inactive", jobTitle: "Manager", lastLogin: "2022-12-01", joinDate: "2021-12-01", role: "User" },
// ];


// function MembersData() {
//     return (
//         <>
//             <div className="wrapper">
//                 <div className="page-title">
//                     <h3>Members</h3>
//                 </div>

//                 <div className="table-container mt-30">
//                     <NextDataTable columns={columns} data={data} />;
//                 </div>
//             </div>
//         </>
//     );
// }

// export default MembersData;


// const NextDataTable = ({ columns, data }: { columns: any; data: any }) => {
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         prepareRow,
//         canPreviousPage,
//         canNextPage,
//         pageOptions,
//         nextPage,
//         previousPage,
//         state: { pageIndex },
//         page
//     } = useTable<DataType>(
//         {
//             columns,
//             data,
//             initialState: { pageIndex: 0 },
//         },
//         useSortBy,
//         usePagination
//     );
    


//     const [exportOpen, setExportOpen] = useState(false);

//     const handleToggleExport = () => setExportOpen(!exportOpen);

//     const [actionOpen, setActionOpen] = useState(false);

//     const handleToggleAction = () => setActionOpen(!actionOpen);

//     const [selectedRows, setSelectedRows] = useState({} as Record<number, boolean>);

//     const toggleCheckbox = (id: number) => {
//         setSelectedRows((prev: any) => ({ ...prev, [id]: !prev[id] }));
//     };

//     return (
//         <div className="card">
//             <div className="card-body">
//                 <div className="table-heading">
//                     <div className="d-flex justify-content-between align-items-center">
//                         <div className="table-title">Organization Members</div>
//                         <div className="table-btn-list">
//                             <button className="btn-refresh"><MdRefresh /></button>
//                             <button className="btn-add"><MdAdd />Add Members</button>
//                             <div className="dropdown">
//                                 <button className="btn-dropdown" onClick={handleToggleExport}>Export data <MdKeyboardArrowDown /></button>
//                                 {exportOpen && (
//                                     <div className="dropdown-content">
//                                         <button className="dropdown-item"><BiSolidFilePdf />PDF</button>
//                                         <button className="dropdown-item"><FaFileCsv />CSV</button>
//                                     </div>
//                                 )}
//                             </div>
//                             <div className="dropdown">
//                                 <button className="btn-dropdown" onClick={handleToggleAction}>Action <MdKeyboardArrowDown /></button>
//                                 {actionOpen && (
//                                     <div className="dropdown-content">
//                                         <button className="dropdown-item"><TbEye />View</button>
//                                         <button className="dropdown-item"><BiEditAlt />Assign Role</button>
//                                         <button className="dropdown-item"><MdOutlineDeleteOutline />Delete</button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <table {...getTableProps()} className="min-w-full bg-white">
//                     <thead>
//                         {headerGroups.map((headerGroup: any) => (
//                             <tr {...headerGroup.getHeaderGroupProps()} className="table-header">
//                                 {headerGroup.headers.map((column: any) => {
//                                     const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
//                                     return (
//                                         <th key={key} {...rest} className="px-4 py-3 text-left border-b cursor-pointer">
//                                             {column.render("Header")}
//                                             <span>
//                                                 {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
//                                             </span>
//                                         </th>
//                                     );
//                                 })}
//                             </tr>
//                         ))}
//                     </thead>
//                     <tbody {...getTableBodyProps()}>
//                         {page.map((row: any) => {
//                             prepareRow(row);
//                             return (
//                                 <tr {...row.getRowProps()} className="padding-sec hover:bg-gray-100">
//                                     {row.cells.map((cell: any) => (
//                                         <td {...cell.getCellProps()} className="px-4 py-3 table-body-text">
//                                             {cell.column.id === "checkbox" ? (
//                                                 <input type="checkbox" checked={!!selectedRows[row.original.id]} onChange={() => toggleCheckbox(row.original.id)} />
//                                             ) : (
//                                                 cell.render("Cell")
//                                             )}
//                                         </td>
//                                     ))}
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>

//                 <div className="table-footer d-flex justify-between items-center mt-4">
//                     <div className="select-row">
//                         Show:
//                         <select>
//                             <option>10</option>
//                             <option>20</option>
//                             <option>30</option>
//                         </select>
//                     </div>
//                     <div className="flex justify-center items-center gap-4">
//                         <button
//                             onClick={previousPage}
//                             disabled={!canPreviousPage}
//                             className="btn-table-arrow disabled:opacity-50"
//                         >
//                             <MdOutlineArrowBackIos />
//                         </button>
//                         <span className="flex gap-2">
//                             <div className="page-number active">{pageIndex + 1}</div>
//                             <div className="page-number">/</div>
//                             <div className="page-number">{pageOptions.length}</div>
//                         </span>
//                         <button
//                             onClick={nextPage}
//                             disabled={!canNextPage}
//                             className="btn-table-arrow disabled:opacity-50"
//                         >
//                             <MdOutlineArrowForwardIos />
//                         </button>
//                     </div>
//                     <div className="table-btn-list">
//                         <button className="btn-black">Manage Roles</button>
//                         <button className="btn-add">View Organization Structure</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


function MembersData() {
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Members</h3>
                </div>
            </div>
        </>
    );
}

export default MembersData;