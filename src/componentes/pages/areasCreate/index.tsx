import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Actions from "../../atoms/actions";
import Table from "../../organims/table";

const AreasCreate = () => {
    const [data, setData] = useState<any>([]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'area', headerName: 'Area', width: 130 },
        { field: 'responsable', headerName: 'Responsable', width: 130 },
        {
            field: 'elementsnumber',
            headerName: 'Número de elementos',
            type: 'number',
            width: 200,
        },
        {
            field: 'acciones',
            headerName: 'Acciones',
            width: 90,
            renderCell: (row) => {
                return <Actions />
            }
        }

    ];



    useEffect(() => {
        const newData: any[] = [];
        for (let i = 0; i < 100; i++) {
            newData.push({ id: i, area: 'Gobierno', responsable: 'Harvey', elementsnumber: i + 12 })
        }
        setData(newData)
    }, []);

    return (
        <>
            <Table cols={columns} data={data} width={800} />
        </>
    );
}

export default AreasCreate;
