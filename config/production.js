module.exports = {
    "log": {
        "appenders": {
            "all": {
                "type": "dateFile",
                "pattern": ".yyyy-MM-dd",
                "filename": "./storages/logs/application.log"
            }
        },
        "categories": {
            "default": {
                "appenders": [
                    "all",
                ],
                "level": "info"
            }
        }
    }
};
