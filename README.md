[![Build Status](https://travis-ci.org/brad/jasonette-toolkit.svg?branch=master)](https://travis-ci.org/brad/jasonette-toolkit) [![codecov](https://codecov.io/gh/brad/jasonette-toolkit/branch/master/graph/badge.svg)](https://codecov.io/gh/brad/jasonette-toolkit) [![Code Climate](https://codeclimate.com/github/brad/jasonette-toolkit/badges/gpa.svg)](https://codeclimate.com/github/brad/jasonette-toolkit) [![npm version](https://badge.fury.io/js/jasonette-toolkit.svg)](https://badge.fury.io/js/jasonette-toolkit)

# Jasonette Toolkit

The Jasonette Toolkit provides a few shortcuts to make it possible to write a [Jasonette](https://jasonette.com/) with brevity.

For example, Jasonette Toolkit changes this:

```
{
  "type": "label",
  "text": "Hello world"
}
```

to this:

```
JT.components.label('Hello world')
```

Or this:

```
"ads": [
  {
    "type": "admob",
    "options": {
      "type": "banner",
      "unitId": "a14dccd0fb24d45"
    }
  }
]
```

to this:

```
ads: [JT.view.body.ad('admob', 'banner', 'a14dccd0fb24d45')]

## Install

`npm install jasonette-toolkit`
