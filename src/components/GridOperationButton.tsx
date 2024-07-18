import React from 'react'

import { Button as MuiButton, Grid, styled } from '@mui/material'

interface GridOperationButtonProps {
	selectedOperation: string
	operation: string
	selectOperation: (digit: string) => void
}

const Button = styled(MuiButton)<{ selected: boolean }>(() => ({}))

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
	selectedOperation,
	operation,
	selectOperation,
}) => {
	return (
		<Grid item xs={3}>
			<Button
				fullWidth
				onClick={() => selectOperation(operation)}
				selected={selectedOperation === operation}
			>
				{operation}
			</Button>
		</Grid>
	)
}
