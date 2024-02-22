export function useDateFormat(date: string | number): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}
	return new Date(date).toLocaleDateString('en', options)
}
