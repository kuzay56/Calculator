import { Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import { OutPutContainer } from '../style/styleCalc'
import { GridDigitButton } from './GridDigitButton'
import { GridOperationButton } from './GridOperationButton'

const GridAllOperation = () => {
	const [currentValue, setCurrentValue] = useState('0')
	const [operation, setOperation] = useState('')
	const [prevValue, setPrevValue] = useState('')
	const [overwrite, setOverwrite] = useState(true)

	const calc = () => {
		if (!prevValue || !operation) return currentValue

		const curr = parseFloat(currentValue)
		const prev = parseFloat(prevValue)

		let result
		switch (operation) {
			case '/':
				result = prev / curr
				break
			case '*':
				result = prev * curr
				break
			case '-':
				result = prev - curr
				break
			case '+':
				result = prev + curr
				break
		}
		return result
	}

	const summ = () => {
		const val = calc()
		setCurrentValue(`${val}`)
		setPrevValue('')
		setOperation('')
		setOverwrite(true)
	}

	const clear = () => {
		setPrevValue('')
		setOperation('')
		setCurrentValue('0')
		setOverwrite(true)
	}

	const square = () => {
		const curr = parseFloat(currentValue)
		setCurrentValue(Math.sqrt(curr).toString())
	}

	const percent = () => {
		const curr = parseFloat(currentValue)
		setCurrentValue((curr / 100).toString())
	}

	const selectOperation = (operation: string) => {
		if (prevValue) {
			const val = calc()
			setCurrentValue(`${val}`)
			setPrevValue(`${val}`)
		} else {
			setPrevValue(currentValue)
		}
		setOperation(operation)
		setOverwrite(true)
	}
	const setDigit = (digit: string) => {
		if (currentValue[0] === '0' && digit === '0') return
		if (currentValue.includes(',') && digit == ',') return
		if (overwrite && digit !== ',') {
			setCurrentValue(digit)
		} else {
			setCurrentValue(`${currentValue}${digit}`)
		}
		setOverwrite(false)
	}

	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<OutPutContainer>{currentValue}</OutPutContainer>
			</Grid>
			<div style={{ width: '100%', borderBottom: '1px solid #fff' }}></div>
			<Grid item container columnSpacing={1}>
				<GridOperationButton
					operation={'AC'}
					selectOperation={clear}
					selectedOperation={operation}
				/>
				<GridOperationButton
					operation={'√'}
					selectOperation={square}
					selectedOperation={operation}
				/>
				<GridOperationButton
					operation={'%'}
					selectOperation={percent}
					selectedOperation={operation}
				/>
				<GridOperationButton
					operation={'/'}
					selectOperation={selectOperation}
					selectedOperation={operation}
				/>
			</Grid>
			<Grid item container columnSpacing={1}>
				<GridDigitButton digit={'7'} enterDigit={setDigit} />
				<GridDigitButton digit={'8'} enterDigit={setDigit} />
				<GridDigitButton digit={'9'} enterDigit={setDigit} />
				<GridOperationButton
					operation={'*'}
					selectOperation={selectOperation}
					selectedOperation={operation}
				/>
			</Grid>
			<Grid item container columnSpacing={1}>
				<GridDigitButton digit={'4'} enterDigit={setDigit} />
				<GridDigitButton digit={'5'} enterDigit={setDigit} />
				<GridDigitButton digit={'6'} enterDigit={setDigit} />
				<GridOperationButton
					operation={'-'}
					selectOperation={selectOperation}
					selectedOperation={operation}
				/>
			</Grid>
			<Grid item container columnSpacing={1}>
				<GridDigitButton digit={'1'} enterDigit={setDigit} />
				<GridDigitButton digit={'2'} enterDigit={setDigit} />
				<GridDigitButton digit={'3'} enterDigit={setDigit} />
				<GridOperationButton
					operation={'+'}
					selectOperation={selectOperation}
					selectedOperation={operation}
				/>
			</Grid>
			<Grid item container columnSpacing={1}>
				<GridDigitButton digit={'00'} enterDigit={setDigit} />
				<GridDigitButton digit={'0'} enterDigit={setDigit} />
				<GridDigitButton digit={','} enterDigit={setDigit} />
				<Grid item xs={3}>
					<Button fullWidth onClick={summ}>
						=
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default GridAllOperation
