import { useState } from 'react';

import DataTableBody from './DataTable/DataTableBody';
import DataTableHead from './DataTable/DataTableHead';

const ASC = 'ascending';
const DESC = 'descending';

const DataTable = ({ dataToShow }) => {
	const [sortConfig, setSortConfig] = useState({
		key: 'name',
		direction: ASC,
	});

	const sortBy = (key) => {
		let direction = ASC;
		if (sortConfig.key === key && sortConfig.direction === ASC)
			direction = DESC;
		setSortConfig({ key, direction });
	};

	const sortedData = Array.from(dataToShow).sort((a, b) => {
		const direction = sortConfig.direction === ASC ? 1 : -1;

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
