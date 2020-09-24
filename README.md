A CLI tool for creating issues in your GitHub repository based on a json file.

## Installation
```bash
# install the package
$ npm install -g issuecreator

# create a json file containing a list of issue objects (see example below)
$ touch issues.json

# start the cli tool
$ issuecreator <absolute-path-to-your-issues.json-file>
```

## `issues.json` example

```js
[
  {
    "title": "Issue 1",
    "body": "Issue description"
   },
   {
     "title": "Issue 2 (If absent, empty string is default value even though I don't know why you would leave title empty)",
     "body": "Another issue description (If absent, empty string is default value)"
    }
]
```
```bash
$ issuecreator /home/myusername/issues.json
```

## Other Info
* This module is created to be used globally but you can also install locally and then run `node lib/index.js <issues.json absolute file path>`

* You need to use absolute path for your issues files for the module to work. Relative file paths won't work in most cases.

* The cli tool will ask for your Github username and then the name of the repository for which the issues will be created. And finally, you need to provide a personal access token. This is only used for making the queries to the GitHub GraphQL API. Only the `repo` authorization is needed. You can easily create one, use for this tool and then delete it by following this guide : https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

## Tests

You can run the tests as follows:

```bash
$ npm install issuecreator
$ npm test
```

## License

### ISC
                
