import { Paper, styled } from '@mui/material'

export const OutPutContainer = styled('div')(({ theme }) => ({
	width: '100%',
	textAlign: 'right',
	height: '2em',
	padding: theme.spacing(2),
	fontSize: '3em',
	overflow: 'hidden',
	color: 'white',
}))

export const CalculatorBase = styled(Paper)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: '100px',
	height: 500,
	padding: theme.spacing(2),
	borderRadius: 18,
	color: 'white',
	background: 'linear-gradient( #28518E, #3A77D1)',
	boxShadow: '0 0 0 3em #fab1c0',
}))
