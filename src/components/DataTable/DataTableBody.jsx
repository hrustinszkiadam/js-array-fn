import DataTableRow from './DataTableRow';

const DataTableBody = ({ sortedData }) => {
	return (
		<tbody>
			{sortedData.map((data) => (
				<DataTableRow
					key={data.id}
					row={data}
				/>
			))}
		</tbody>
	);
};

export default DataTableBody;
