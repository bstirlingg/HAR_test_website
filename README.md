
# Welcome to the HAR Extension Test Website

## Architecture

```mermaid
graph TD
    User((User)) -->|Visits Website| WebPage[Web Page]
    WebPage -->|User clicks 'Test' button| Button["'Test' Button"]
    Button -->|Generates HTTP Error| Backend[Backend Server]
    Backend -->|Returns HTTP Error Response| Button
    Button -->|Displays Error Message| User
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

