import { createTheme } from '@mui/material'

const theme = createTheme({
	palette: {
		mode: 'light',
		background: { default: '#ff859d' },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					margin: '0 auto',
					maxWidth: '10px',
					color: 'white',
					borderRadius: 50,
				},
			},
		},
	},
	typography: {
		button: {
			fontSize: '1rem',
		},
	},
})

export default theme
