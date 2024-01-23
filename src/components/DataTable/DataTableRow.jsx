const DataTableRow = ({ row }) => {
	return (
		<tr>
			<td>{row.id}</td>
			<td>{row.name}</td>
			<td>{row.age}</td>
			<td>{row.city}</td>
		</tr>
	);
};

export default DataTableRow;
