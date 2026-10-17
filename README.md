## Sabri 'Elras' Bolkar  
Machine learning / AI applied scientist & engineer

## Asset cache busting

`index.html` loads `styles.css` and `script.js` with version query parameters so
browsers fetch new assets when their contents change. No build step is required.

Whenever either asset changes, run:

```sh
sha256sum styles.css script.js
```

Update that asset's `?v=` value in `index.html` to the first 12 characters of its
SHA-256 hash, and commit the asset and URL changes together.
