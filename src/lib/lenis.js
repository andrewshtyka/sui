let lenisInstance = null;
const listeners = new Set();

export function setLenis(instance) {
	lenisInstance = instance;
	listeners.forEach((callback) => callback(instance));
}

export function getLenis() {
	return lenisInstance;
}

export function onLenisReady(callback) {
	if (lenisInstance) callback(lenisInstance);
	listeners.add(callback);

	return () => listeners.delete(callback);
}
