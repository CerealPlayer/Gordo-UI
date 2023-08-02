import {
  DetailedHTMLProps,
  ElementType,
  MouseEventHandler,
  TdHTMLAttributes,
  useState,
} from 'react'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  NextPageIcon,
  NextPageIconDis,
  PrevPageIcon,
  PrevPageIconDis,
} from '../components/icons/StarIcon'
import IconButton from '../Button/IconButton'

type TableCellReactProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>
export interface TablePaginationProps extends TableCellReactProps {
  count: number
  rowsPerPage: number
  page: number
  onPageChange: (event: React.MouseEvent | null, page: number) => void
  ActionsComponent?: ElementType
}
export default function TablePagination({
  count,
  rowsPerPage,
  page,
  onPageChange,
  ActionsComponent,
}: TablePaginationProps) {
  const [open, setOpen] = useState(false)
  // const [actualPage, setActualPage] = useState({
  //   iniPag: 1,
  //   finPag: rowsPerPage,
  // })
  const onClickHandler = () => {
    setOpen(!open)
  }
  const onPrevClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    onPageChange(ev, page - 1)
  }
  const onNextClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    onPageChange(ev, page + 1)
  }
  const setPage = () => {
    const iniPag = Math.max(1, Math.min(count, 1 + page * rowsPerPage))

    const finPag =
      rowsPerPage === -1
        ? count
        : count === -1
        ? rowsPerPage + rowsPerPage * page
        : Math.max(
            rowsPerPage,
            Math.min(count, rowsPerPage + rowsPerPage * page)
          )
    return { iniPag: iniPag, finPag: finPag }
  }
  return (
    <td className="p-0" colSpan={1000}>
      <div className="flex relative items-center pl-6 pr-1 justify-end">
        <p className="my-4 font-base text-base font-normal">Rows per page:</p>
        <div
          className="inline-flex ml-2 mr-8 items-center relative cursor-pointer"
          onClick={onClickHandler}
        >
          <div className="overflow-hidden overflow-ellipsis block pl-2 pr-6 pt-1 pb-[5px] min-w-[16px] box-content  min-h-[20.125px] ">
            {rowsPerPage === -1 ? 'All' : rowsPerPage}
          </div>
          <input className="b-0 l-0 absolute w-full opacity-0 pointer-events-none"></input>
          <div className="absolute w-6 h-6 right-0 flex justify-center items-center ">
            {!open ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </div>
        <p className="font-base text-base font-normal">
          {setPage().iniPag}-{setPage().finPag} of{' '}
          {count === -1 ? `more than ${setPage().finPag}` : `${count}`}
        </p>
        {!ActionsComponent && (
          <div>
            {page > 0 ? (
              <IconButton onClick={onPrevClick}>
                <PrevPageIcon />
              </IconButton>
            ) : (
              <IconButton disabled>
                <PrevPageIconDis />
              </IconButton>
            )}
            {setPage().finPag !== count ? (
              <IconButton onClick={onNextClick}>
                <NextPageIcon />
              </IconButton>
            ) : (
              <IconButton disabled>
                <NextPageIconDis />
              </IconButton>
            )}
          </div>
        )}
        {ActionsComponent && (
          <div className="ml-5 flex-shrink-0">
            <ActionsComponent
              onPageChange={onPageChange}
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          </div>
        )}
      </div>
    </td>
  )
}
