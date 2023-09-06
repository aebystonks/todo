export const getElem = selector => {
	return document.querySelector(selector)
}

export const highPriorityForm = getElem('.high-priority-form')
export const lowPriorityForm = getElem('.low-priority-form')
export const valueSource1 = getElem('.high-custom-input')
export const valueSource2 = getElem('.low-custom-input')
export let highOuterContainer = getElem('.high-outer-container')
export let lowOuterContainer = getElem('.low-outer-container')
