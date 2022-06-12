# Rural Techのホームページ

[github pages](https://ruraltechcoltd.github.io/Homepage/)

## サイト構造

``` plantuml
file index.html
component index
component App
component TopPage
component EventPage
component Header
component Footer
component About
component Services
component Team

index.html --> index
index --> App

App --> TopPage
TopPage --> Header
TopPage --> About
TopPage --> Services
TopPage --> Team
TopPage --> Footer

App --> EventPage
EventPage --> Header
EventPage --> Footer
```
