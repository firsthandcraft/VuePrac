```sh

C:\Users\uintone\Downloads\Vue\board\VuePrac>npm init vue
Need to install the following packages:
create-vue@3.7.5
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

√ Project name: ... vue3-posts
√ Add TypeScript? ... No / Yes
√ Add JSX Support? ... No / Yes
√ Add Vue Router for Single Page Application development? ... No / Yes
√ Add Pinia for state management? ... No / Yes
√ Add Vitest for Unit Testing? ... No / Yes
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... No / Yes
√ Add Prettier for code formatting? ... No / Yes

Scaffolding project in C:\Users\uintone\Downloads\Vue\board\VuePrac\vue3-posts...

Done. Now run:

  cd vue3-posts
  npm install
  npm run format
  npm run dev

```

## lint

ESLint : ESLint는 코드 검사기로 코드에 에러가 있는지 검사해주 도구 입니다.


``` javascript
//.eslintrc.cjs 파일
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto', // 한줄 추가
			},
		],
	},
};

```


실행
```sh
C:\Users\uintone\Downloads\Vue\board\VuePrac\vue3-posts>npm run lint
```
- `plugin:vue/vue3-essential`
    
    [Available rules | eslint-plugin-vue](https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-3-x)
    
- `eslint:recommended`
    
    ✔️ 표시된 항목을 자동으로 검사해주는 옵션
    
    [List of available rules](https://eslint.org/docs/rules/)
    
- `@vue/eslint-config-prettier`
    
    불필요한 규칙이나 eslint와 prettier와 출동할 수 있는 규칙을 끄는 출동 방지용 패키지 입니다.
    
    Vue용 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
    
    이 구성은 @vue/cli 및 create-vue 설정에서 사용하도록 특별히 설계되었습니다.


## bootstrap

```sh
C:\Users\uintone\Downloads\Vue\board\VuePrac\vue3-posts>npm install bootstrap bootstrap-icons
```

``` javascript
//main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
createApp(App).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

```

## jsconfig.json
vs 의 내장된 파일 - 자바스크립트 언어의 루트를 나타냄/자바스크립트 다양한 옵션의 기능 제공