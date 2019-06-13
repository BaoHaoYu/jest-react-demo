- [开始](#开始)
  - [创建](#11-%E5%88%9B%E5%BB%BA-jestconfigjs)
# 1.开始
## 1.1 创建 jest.config.js
## 1.2 输入以下内容： 
```javascript
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
```

### 2.1 
