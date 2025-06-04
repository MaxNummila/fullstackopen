```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
    activate server
    server-->>browser: HTTP 302
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Reload the notes page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The style sheet
    deactivate server
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: The JavaScript code
    deactivate server


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: The raw data of the notes
    deactivate server

    
