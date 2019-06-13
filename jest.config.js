module.exports = {
    "collectCoverage": true,
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "moduleNameMapper": {
        "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy"
    },
    "transform": {
        "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "/__tests__/.*\\.(ts|tsx|js)$"
}