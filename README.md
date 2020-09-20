A CLI tool for creating issues in your GitHub repository based on a json file.

## Installation
```bash
# install the package
$ npm install -g issuecreator

# add a file named issues.json to your working directory
$ touch issues.json

# start the cli with the command 'issuecreator'
$ issuecreator
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

## Tests

You can run the tests as follows:

```bash
$ npm install issuecreator
$ npm test
```

## License

### ISC
                
