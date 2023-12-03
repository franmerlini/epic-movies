const APP_PREFIX = 'EM-';

export class LocalStorageService {
  public static get initialState(): unknown {
    return Object.keys(localStorage).reduce((state: Record<string, unknown>, storageKey) => {
      if (storageKey.startsWith(APP_PREFIX)) {
        const stateKeys = storageKey
          .replace(APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map((key) =>
            key
              .split('-')
              .map((token, index) => (index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)))
              .join('')
          );

        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey) as string);
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key] as Record<string, unknown>;
        });
      }

      return state;
    }, {});
  }

  public static setItem(key: string, value: unknown) {
    const valueToStore = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(`${APP_PREFIX}${key}`, valueToStore);
  }

  public static getItem(key: string): unknown {
    const value = localStorage.getItem(`${APP_PREFIX}${key}`);

    if (!value) return null;

    return JSON.parse(value);
  }

  public static removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }
}
