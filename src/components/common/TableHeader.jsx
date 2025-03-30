import { TableHead, TableRow, TableCell } from "@mui/material"

const TableHeader = ({bgcolor, data}) => {
    <TableHead sx={{width: "100%", backgroundColor: bgcolor}}>
        <TableRow sx={{width: "100%", justifyContent: "space-between", textAlign: "center"}} >
            {
                data.map(item => (
                    <TableCell>{item}</TableCell>
                ))
            }
        </TableRow>
    </TableHead>
}

export default TableHeader