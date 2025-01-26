### Express JS Project Structure

1. Initiate Node JS
    -- npm init --y
2. Package.json
    -- replace index.js by your file name
    -- add "type": "module" after index.js
3. Express JS Backend With Packages
    - npm i express
    - npm i cors
    - npm i nodemon
    - npm i mongoose
    - npm i nodemailer
    - npm i jsonwebtoken
    - npm i cookie-parser
    - npm i express-fileupload
    - npm i helmet (security purpose)
    - npm i hpp (to prevent annomaly url pollution)
    - npm i express-rate-limit (prevent ddos attack)

4. File folder structure
    - app.js
        - import applications all packages
    - app
        - config
            - config.js
        - controllers 
            - taskController.js
        - middlewares
            - authMiddleware.js
        - models
            - 
        - utility
            - emailUtility
            - tokenUtility (Encode And Decode JWT TOKEN)
        - routes
            - api.js
        - storage
5. How to Works with Request Params
    - Url Params
        - router.post('/createtaskparam/:name/:mail/:id', TaskController.createTaskParam);
        - let name = req.params.name;
    - Query String
        - {{localhost}}/createtaskstring?country=Bangladesh&lang=Bangla
        - let country = req.query.country;
    - File upload