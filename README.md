# Synopsis

Text your friends randomly generated story plots

## Requirements

* Node
* Popcorn Notify API key

## Setup

* Clone this repo
* Run `yarn`
* Setup your config.yaml with Popcord Notify API key and phone numbers/emails

```sh
git clone https://github.com/acobster/synopsis
cd synopsis
cp config.example.yaml config.yaml
# edit your config to your heart's desire
```

## Example config:

```
---
contacts:
# list as many phone numbers or emails as you like...
- 6665556666
- someone@example.com

error_contacts:
- 1234567890

popcorn_api_key: YOUR_POPCORN_API_KEY
...
```

Finally, run `node index.js`.
