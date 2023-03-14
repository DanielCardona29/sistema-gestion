import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Actions from "../../atoms/actions";
import Table from "../../organims/table";

const AreasCreate = () => {
    const [data, setData] = useState<any>([]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', },
        { field: 'area', headerName: 'Area', },
        {
            field: 'responsable', headerName: 'Responsable',
            filterable: true,
        },
        {
            field: 'elementsnumber',
            headerName: 'Número de elementos',
            type: 'number',
            filterable: true,
        },


        {
            field: 'fecha',
            headerName: 'fecha',
            type: 'date',
            filterable: true,
            headerAlign: 'center'
        },
        {
            field: 'acciones',
            headerName: 'Acciones',
            renderCell: (row) => {
                return <Actions />
            }
        }

    ];



    useEffect(() => {
        const newData: any[] = [];
        for (let i = 0; i < 100; i++) {
            newData.push({ id: i, area: 'Gobierno', elementsnumber: (Math.random() * 100 as number).toFixed(0), responsable: 'Harvey ' + i, fecha: new Date(Date.now()) })
        }
        setData(newData)
    }, []);

    return (
        <>
            <Table cols={columns} data={data} />
        </>
    );
}

export default AreasCreate;
