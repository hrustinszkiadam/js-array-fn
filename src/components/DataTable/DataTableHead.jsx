const DataTableHead = ({ onClick }) => {
	const columns = ['id', 'name', 'age', 'city'];

	return (
		<thead>
			<tr>
				{columns.map((column) => (
					<td
						key={column}
						onClick={() => onClick(column)}
					>
						{column}
					</td>
				))}
			</tr>
		</thead>
	);
};

export default DataTableHead;
