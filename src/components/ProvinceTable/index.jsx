import StyledProvinceTable from "./ProvinceTable.styled"
import Table from "../Table"

function ProvinceTable(props) {
    const { title, data } = props

    return (
        <StyledProvinceTable>
            <div className="title">
                <h1>{title} Province</h1>
                <h3>Covid Data by Province</h3>
            </div>
            <div className="table__container">
                <Table data={data} />
            </div>
        </StyledProvinceTable>
    )
}


export default ProvinceTable
