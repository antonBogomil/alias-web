export function shouldCancelStart(e: any): boolean {
	return ['button', 'svg', 'span', 'path'].indexOf(e.target.tagName.toLowerCase()) !== -1;
}
