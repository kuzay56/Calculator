import React from 'react'

import { Button, Grid } from '@mui/material'

interface GridDigitButtonProps {
	digit: string
	enterDigit: (digit: string) => void
	xs?: number
}

export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
	digit,
	enterDigit,
	xs = 3,
}) => {
	return (
		<Grid item xs={xs}>
			<Button fullWidth onClick={() => enterDigit(digit)}>
				{digit}
			</Button>
		</Grid>
	)
}
