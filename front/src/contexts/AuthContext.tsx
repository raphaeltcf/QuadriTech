import { AuthService } from '@/services/api/auth/AuthService';
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

interface IAuthContextData {
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<string | void>;
	logout: () => void;
}

const AuthContext = createContext({} as IAuthContextData);

const LOCAL_STORAGE_KEY_ACCESS_TOKEN = 'access_token';
const LOCAL_STORAGE_KEY_USER = 'user';

interface IAuthProviderProps {
	children: ReactNode;
}

export interface IUser {
	username: string;
	email: string;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
	const [accessToken, setAccessToken] = useState<string>();
	const [user, setUser] = useState<IUser>();

	useEffect(() => {
		const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
		const user = localStorage.getItem(LOCAL_STORAGE_KEY_USER);

		if (accessToken && user) {
			setAccessToken(JSON.parse(accessToken));
			setUser(JSON.parse(user));
		} else {
			setAccessToken(undefined);
			setUser(undefined);
		}
	}, []);

	const handleLogin = useCallback(async (email: string, password: string) => {
		const result = await AuthService.auth(email, password);

		if (result instanceof Error) {
			return result.message;
		} else {
			localStorage.setItem(
				LOCAL_STORAGE_KEY_ACCESS_TOKEN,
				JSON.stringify(result.access_token)
			);
			setAccessToken(result.access_token);

			localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(result.user));
			setUser(result.user);
		}
	}, []);

	const handleLogout = useCallback(() => {
		setAccessToken(undefined);
		localStorage.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);

		setUser(undefined);
		localStorage.removeItem(LOCAL_STORAGE_KEY_USER);
	}, []);

	const isAuthenticated = useMemo(
		() => !!accessToken && !!user,
		[accessToken, user]
	);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
