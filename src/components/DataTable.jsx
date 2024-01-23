import { useState } from 'react';

import DataTableBody from './DataTable/DataTableBody';
import DataTableHead from './DataTable/DataTableHead';

const DataTable = ({ dataToShow }) => {
	const [sortConfig, setSortConfig] = useState({
		key: 'name',
		direction: 'asc',
	});

	const sortBy = (key) => {
		let direction = 'asc';
		if (sortConfig.key === key && sortConfig.direction === 'asc')
			direction = 'desc';
		setSortConfig({ key, direction });
	};

	const sortedData = Array.from(dataToShow).sort((a, b) => {
		const direction = sortConfig.direction === 'asc' ? 1 : -1;

		if (a[sortConfig.key] < b[sortConfig.key]) return -direction;
		return direction;
	});

	return (
		<table>
			<DataTableHead onClick={sortBy} />
			<DataTableBody sortedData={sortedData} />
		</table>
	);
};

export default DataTable;
