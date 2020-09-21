A CLI tool for creating issues in your GitHub repository based on a json file.

## Installation
```bash
# install the package
$ npm install -g issuecreator

# add a json file to your working directory containing a list of issue objects (see example below)
$ touch issues.json

# start the cli tool
$ issuecreator <path-to-your-issues.json-file>
```
## `issues.json` example

```js
[
  {
    "title": "Issue 1",
    "body": "Issue description"
   },
   {
     "title": "Issue 2 (If absent, empty string is default value even though I do't know why you would leave title empty)",
     "body": "Another issue description (If absent, empty string is default value)"
    }
]
```
```bash
$ issuecreator ./issues.json
```

* The cli tool will ask for your Github username and then the name of the repository for which the issues will be created. And finally, you need to provide a personal access token. This is only used for making the queries to the GitHub GraphQL API. Only the `repo` authorization is needed. You can easily create one, use for this tool and then delete it by following this guide : https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

## Tests

You can run the tests as follows:

```bash
$ npm install issuecreator
$ npm test
```

## License

### ISC
                
