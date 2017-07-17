module.exports = {
    "database": {
        "driver": "pgsql"
    },
    "log": {
        "appenders": {
            "all": {
                "type": "file",
                "filename": "./storages/logs/application.log"
            },
            "out": {
                "type": "stdout"
            }
        },
        "categories": {
            "default": {
                "appenders": [
                    "all",
                    "out"
                ],
                "level": "debug"
            }
        }
    }
};
