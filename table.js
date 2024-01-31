import React from "react";
import Table from 'react-bootstrap/Table';

function TableData() {
    const tableData = [
        { program: "B. Com", feePerSemester: "Rs.2500/-", registrationFee: "Rs.500/-", applicationFee: "Rs.100/-", total: "Rs.3,100/-" },
        { program: "BBA", feePerSemester: "Rs.2500/-", registrationFee: "Rs.500/-", applicationFee: "Rs.100/-", total: "Rs.3,100/-" },
        { program: "BA(Hons) - English", feePerSemester: "Rs.2500/-", registrationFee: "Rs.500/-", applicationFee: "Rs.100/-", total: "Rs.3,100/-" },
        { program: "BA(Hons) - Economics", feePerSemester: "Rs.2500/-", registrationFee: "Rs.500/-", applicationFee: "Rs.100/-", total: "Rs.3,100/-" },
        { program: "MBA", feePerSemester: "Rs.12500/-", registrationFee: "Rs.500/-", applicationFee: "Rs.100/-", total: "Rs.13,100/-" },
    ];

    const tableStyle = {
        textIndent: 'initial',
        borderSpacing: '2px',
    };

    const thStyle = {
        display: 'table-cell',
        verticalAlign: 'inherit',
        fontWeight: 'bold',
        backgroundColor: '#060543',
        color: 'white',
    };

    const tdStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'center',
    };

    return (
        <>
            <div className="table-responsive">
                <Table striped bordered hover style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>No</th>
                            <th style={thStyle}>Name of Programme</th>
                            <th style={thStyle}>Programme Fee (Per Semester)</th>
                            <th style={thStyle}>Registration Fee*</th>
                            <th style={thStyle}>Application Fee*</th>
                            <th style={thStyle}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{index + 1}</td>
                                <td style={tdStyle}>{data.program}</td>
                                <td style={tdStyle}>{data.feePerSemester}</td>
                                <td style={tdStyle}>{data.registrationFee}</td>
                                <td style={tdStyle}>{data.applicationFee}</td>
                                <td style={tdStyle}>{data.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <p>*Registration fee and Application fee is only at the time of admission.</p>
            </div>
        </>
    );
}

export default TableData;
