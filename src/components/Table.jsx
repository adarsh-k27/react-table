import React, { useMemo,useContext } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import GlobalFilter from "./GlobalFilter";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaArrowCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import GlobalContext from "../context";
function ReactTable() {
  // const re=new RegExp("ca","i")
  // const FILTERED=
  const { ColumnFilter,catogery } = useContext(GlobalContext).state;
  const columns = useMemo(() => COLUMNS, []);
  console.log("succesde",console.log(catogery,ColumnFilter));
  const data = useMemo(() => {
    if (ColumnFilter == "" && catogery== "") {
      return MOCK_DATA;
    }
    const re = new RegExp(ColumnFilter, "i");
    try {
      return MOCK_DATA.filter((Data) => Data[catogery].match(re));
    } catch (error) {
      const le=new RegExp(ColumnFilter)
      return MOCK_DATA.filter((Data)=> Data[catogery]== ColumnFilter || Data[catogery][0] == ColumnFilter)
    }
  }, [ColumnFilter]);
  const TableOptions = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
    prepareRow,
    state,
    pageOptions,
  } = TableOptions;

  const { globalFilter, pageIndex } = state;
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps}
        className='w-screen h-auto px-4 py-4 flex flex-col'
      >
        <thead className='w-full bg-green-600'>
          {headerGroups?.map((header) => (
            <tr
              {...header.getHeaderGroupProps()}
              className='w-full flex flex-row gap-0'
            >
              {header.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className='text-base text-white font-serif font-semibold tracking-wide min-w-[17%] py-3 border border-r border-white/20 hover:bg-green-700 cursor-pointer '
                >
                  {column.render("header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortDesc ? (
                        <FaArrowAltCircleUp />
                      ) : (
                        <FaArrowCircleDown />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                  {
                    <div>
                      {column.canFilter ? column.render("filter") : <p></p>}
                    </div>
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps} className='w-full h-auto'>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`w-full h-auto flex flex-row ${
                  index % 2 == 0 ? "bg-white" : "bg-gray-200"
                } hover:bg-black/20 cursor-pointer`}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className='min-w-[17%] h-auto text-sm text-black/70 font-serif tracking-wide py-3 border border-r border-solid border-black/5'
                    >
                      {cell.value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='w-full flex items-center justify-center'>
        <div className='flex flex-row gap-5  '>
          <span>
            <strong>{pageIndex + 1}</strong>
            <span> of </span>
            <strong>{pageOptions.length}</strong>
            <span> pages </span>
          </span>
          {canPreviousPage && (
            <button
              onClick={(e) => {
                e.preventDefault();
                previousPage();
              }}
            >
              <MdOutlineArrowBackIosNew className='text-4xl text-blue-500 ' />
            </button>
          )}
          {canNextPage && (
            <button
              onClick={(e) => {
                e.preventDefault();
                nextPage();
              }}
            >
              <MdOutlineArrowForwardIos className='text-4xl text-blue-500' />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ReactTable;
