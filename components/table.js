import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 export default function DTable({tableData}){
    
    if (tableData.length > 0){
        return (
        
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Percent</TableCell>
                        <TableCell>Balance</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{row.name}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell >{row.equityPercent}</TableCell>
                            <TableCell >{row.balance} ♦ </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            )
    } else {
        return <h1>Loading</h1>
    }
    
}