project creation 
------------------
npm create vite@latest
    select , react , javascript

cd redux
npm install
npm run dev

removing unneccesary css
------------------------
delete App.css
remove content from App.jsx and index.css

add the below content to index.css [after tailwind replace it is taken care by tailwind]
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  height: 100%;
  width: 100%;
}

Tailwind setup
--------------
refer - https://v3.tailwindcss.com/docs/installation/using-postcss

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js 
content: ["./src/**/*.{html,js,jsx}"],

index.css 
@tailwind base;
@tailwind components;
@tailwind utilities;

use the tailwind extension 
	tailwind css intellisense

go to setting 
	add plaintext: css
