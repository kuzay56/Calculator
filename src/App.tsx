import React from 'react'

import { Container } from '@mui/material'
import { CalculatorBase } from './style/styleCalc'
import GridAllOperation from './components/GridAllOperation'

function App() {
	return (
		<Container maxWidth='sm'>
			<CalculatorBase elevation={3}>
				<GridAllOperation />
			</CalculatorBase>
		</Container>
	)
}

export default App
