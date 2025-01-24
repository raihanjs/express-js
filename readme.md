# Express js

To learn any server side properly we must have to understand these four thungs

1. Request
2. Response
3. Middleware
4. Database Operation

## Working With Request

    -- POST
        -- Request Header
        -- Simple POST Request
        -- Request With URL Parameter
        -- Request JSON Body (Needed Body Parser)
        -- Request File upload (Need to Install Multer)
        -- Request Multipart Form Data (FORM submit. Need to Install Multer)
    -- GET
        -- Simple GET request
        -- Catch request header
        -- Simple GET request with URL parameter
    -- PUT
    -- Delete

## Working With Response

1. Response Body
   -- JSON Response
   -- String Response
2. Response Status
3. Response Header
4. Response Cookie
   -- Set Response Cookie
   -- Clear Response Cookie
5. Download Response
6. Response Rediirect

### Multipart using for passing data from a FORM

### Without File Steps

-- npm i multipart
-- var multer = require("multer");
-- var multer = multer();
-- app.use(multer.array());
-- app.use(express.static("public"));

### With File Steps

1st Step -- npm i multipart

```
-- 2nd Step
var multer = require("multer");
```

```
-- 3rd Step

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    },
});
```

```
-- 4th Step

var upload = multer({ storage }).single("myfile");
```

```
-- 5th Step

app.post("/fileupload", (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            res.send("File Upload Failed");
        } else {
            res.send("File Upload Success");
        }
    });
});
```

## Middlewares

1. Application Level
2. Route Level
