import {format} from 'date-fns'
import ColumnFilter from "./ColumnFilter"
export const COLUMNS = [{
        header: "Id",
        accessor: "id",
        filter:ColumnFilter
    },
    {
        header: "FirstName",
        accessor: "first_name",
        filter: ColumnFilter
    },
    {
        header: "LastName",
        accessor: "last_name",
        filter: ColumnFilter
    },
    {
        header: "Email",
        accessor: "email",
        filter: ColumnFilter
    },
    {
        header: "Dob",
        accessor: "date-of-birth",
        cell:({value})=>{
            return format(new Date(value),'dd/mm/yyyy')
        },
        filter: ColumnFilter
    },
    {
        header: "Age",
        accessor: "age",
        filter: ColumnFilter
    },

]

export const GROUP_COLUMNS = [
    {
        Header: "Id",
        accessor: "id"
    }

    , {
        Header: "Name",
        columns: [{
            Header: "FirstName",
            accessor: "first_name"
        }, {
            Header: "LastName",
            accessor: "last_name"
        }, ]
    }, {
        Header: "Info",
        columns: [{
                Header: "Email",
                accessor: "email"
            }, {
                Header: "Dob",
                accessor: "date-of-birth"
            }, {
                Header: "Age",
                accessor: "age"
            },

        ]
    },
]