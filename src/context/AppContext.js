import { createContext, useState, useEffect } from 'react';
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [state, setState] = useState(false);

	return (
		<AppContext.Provider
			value={
				{
					// Values and functions to export
				}
			}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
