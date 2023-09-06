import { PRIORITIES, STATUSES } from './functional.js'
import { highOuterContainer, lowOuterContainer } from './get-elements.js'

export let toDoList = []

const createElem = elem => document.createElement(elem)

export function renderList() {
	clearContainers()
	toDoList.forEach((element, index) => {
		const contentContainer = createContentContainer(element)
		appendToContainer(
			element.priority === PRIORITIES.HIGH
				? highOuterContainer
				: lowOuterContainer,
			contentContainer
		)
		setDeleteIconHandler(contentContainer, index)
		setCheckboxHandler(contentContainer, element)
	})
}

function clearContainers() {
	highOuterContainer.textContent = ''
	lowOuterContainer.textContent = ''
}

function createContentContainer(element) {
	const contentContainer = createElem('div')
	const checkboxLabel = createElem('label')
	const checkbox = createElem('input')
	const customCheckbox = createElem('div')
	const contentText = createElem('div')
	const deleteIcon = createElem('img')

	contentContainer.className = 'content-container'
	checkboxLabel.className = 'checkbox-label'
	checkbox.className = 'checkbox'
	customCheckbox.className = 'checkbox-custom'
	contentText.className = 'content-text'
	deleteIcon.className = 'delete-icon'

	checkbox.type = 'checkbox'
	checkbox.checked = element.status === STATUSES.DONE
	contentText.textContent = element.task
	deleteIcon.src = './img/delete.png'

	checkboxLabel.append(checkbox, customCheckbox)
	contentContainer.append(checkboxLabel, contentText, deleteIcon)

	updateStyles(element, customCheckbox, contentText)

	return contentContainer
}

function appendToContainer(container, content) {
	container.className = 'outer-container-added'
	container.appendChild(content)
}

function setDeleteIconHandler(contentContainer, index) {
	const deleteIcon = contentContainer.querySelector('.delete-icon')
	deleteIcon.addEventListener('click', () => {
		toDoList.splice(index, 1)
		renderList()
	})
}

function setCheckboxHandler(contentContainer, element) {
	const checkbox = contentContainer.querySelector('.checkbox')
	checkbox.addEventListener('click', event => {
		element.status = event.target.checked ? STATUSES.DONE : STATUSES.IN_PROGRESS
		updateStyles(
			element,
			contentContainer.querySelector('.checkbox-custom'),
			contentContainer.querySelector('.content-text')
		)
	})
}

function updateStyles(element, customCheckbox, contentText) {
	if (element.status === STATUSES.DONE) {
		customCheckbox.classList.add('checkbox-custom_done')
		contentText.classList.add('checked-text-content')
	} else {
		customCheckbox.classList.remove('checkbox-custom_done')
		contentText.classList.remove('checked-text-content')
	}
}
