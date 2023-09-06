import { PRIORITIES, addTask } from './functional.js'
import {
	highPriorityForm,
	lowPriorityForm,
	valueSource1,
	valueSource2,
} from './get-elements.js'
import { renderList } from './render.js'

highPriorityForm.addEventListener('submit', event => {
	event.preventDefault()

	addTask(valueSource1.value, PRIORITIES.HIGH)
	renderList()
})

lowPriorityForm.addEventListener('submit', event => {
	event.preventDefault()

	addTask(valueSource2.value, PRIORITIES.LOW)
	renderList()
})
