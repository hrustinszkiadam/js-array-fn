const Searchbar = ({ state }) => {
	const [value, setValue] = state;
	return (
		<input
			type='text'
			placeholder="Person's name"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export default Searchbar;
