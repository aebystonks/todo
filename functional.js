import { valueSource1, valueSource2 } from './get-elements.js'
import { toDoList } from './render.js'

export const STATUSES = {
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
}

export const PRIORITIES = {
	HIGH: 'high',
	LOW: 'low',
}

export const addTask = (task, priority, newStatus = STATUSES.IN_PROGRESS) => {
	const existingTaskIndex = toDoList.findIndex(item => item.task === task)

	if (task.length < 5) {
		alert(
			new Error('The length of the task description must be at least 5 lines!')
		)
		valueSource1.value = ''
		valueSource2.value = ''
		return
	}

	if (existingTaskIndex !== -1) {
		alert(new Error(`Task with the same name: ${task} already exists`))
		valueSource1.value = ''
		valueSource2.value = ''
		return
	} else {
		toDoList.push({
			task: task,
			priority: priority,
			status: newStatus,
		})
		valueSource1.value = ''
		valueSource2.value = ''
	}
}
