class AppTheme {
    private static _instance: undefined | AppTheme;
    private static _themeName: undefined | string;

    private constructor() { }

    static getInstance() {
        if (!this._instance) {
            this._instance = new AppTheme();
        }
        return this._instance;
    }

    setThemeName(themeName: string) {
        AppTheme._themeName = themeName;
    }

    themeName() {
        return AppTheme._themeName;
    }
}

export { AppTheme };