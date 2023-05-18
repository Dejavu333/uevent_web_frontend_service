function getEnvOrDefault(key: string, defaultValue: string = ""): string {
    const value = process.env[key];
    return value ? value : defaultValue;
}

function getEnvOrThrow(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
}

export default getEnvOrDefault;