# Node.js Notes

## What is Node.js?
- Node.js is a JavaScript runtime built on Google's V8 engine.
- It executes JavaScript code outside the browser.
- It gives JavaScript access to the computer's resources:
  - files and folders
  - network and APIs
  - processes and system operations

## How JavaScript runs
- Browser:
  - JavaScript -> Chrome/Edge/Firefox -> V8 engine -> output
- Node.js:
  - JavaScript -> Node.js -> V8 engine -> operating system -> output

## Browser vs Node.js
- Browser:
  - runs in Chrome, Edge, Firefox
  - has `window`
  - has `document`
  - can manipulate HTML
  - cannot directly read local files
  - cannot create a server
- Node.js:
  - runs on your computer
  - has no `window`
  - has no `document`
  - cannot manipulate HTML directly
  - can read and write files
  - can create servers

## Example
- `document.getElementById("demo")` works in a browser.
- The same code fails in Node.js because Node has no HTML page or DOM.

## What can Node.js do?
- Read files
- Write files
- Create folders
- Create web servers
- Connect to databases
- Send emails
- Call APIs
- Run background jobs

## Real-world backend architecture
- Frontend: React / Angular
- Backend: Node.js + Express
- Database: SQL Server

This is the kind of backend architecture you can build with Node.js and Express.