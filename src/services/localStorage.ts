const localStorageUsedNames: string[] = []

export default class LocalStorageService {
  name: string;

  constructor(name: string) {
	this.name = name
	if (localStorageUsedNames.indexOf(name) === -1) {
	  localStorageUsedNames.push(name)
	} else {
	  throw new Error(localStorageUsedNames.join(',') + ' Already use')
	}
  }

  get = (): any => {
	const stored = localStorage.getItem(this.name);
	return stored ? JSON.parse(stored) : {}
  }
  set = (data: Object) => {
	localStorage.setItem(this.name, JSON.stringify(data))
  }
}
