import '../node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js';
import '../node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js';
import '../node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js';
import '../node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js';
import '../node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution.js';

import '../node_modules/monaco-editor/esm/vs/editor/edcore.main.js';

monaco.editor.create(document.getElementById("container"), {
	value: "function hello() {\n\talert('Hello world!');\n}",
	language: "javascript"
});
