import { useState, useMemo, useDeferredValue } from 'react';

import Searchbar from './components/Searchbar';
import DataTable from './components/DataTable';

import people from './assets/people.json';

const App = () => {
	const [name, setName] = useState('');
	const deferredName = useDeferredValue(name);

	const filteredByName = useMemo(
		() =>
			people.filter((x) =>
				x.name.toLowerCase().startsWith(deferredName.toLowerCase())
			),
		[deferredName]
	);

	return (
		<div className='app'>
			<Searchbar state={[name, setName]} />
			<DataTable dataToShow={filteredByName} />
		</div>
	);
};

export default App;
