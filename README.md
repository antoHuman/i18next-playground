# i18next-playground

partially based on the tutorial https://www.youtube.com/watch?v=SA_9i4TtxLQ

## Notes about i18next

### namespaces

The default is `translation`.
Different namespaces allow to separate translations in multiple files
(but I think you can do the same with nested keys).

```js
i18next.init({
  lng: "en",
  fallbackNS: 'common',
  resources: {
    en: {
      translation: {
        deep: {
          key: 'hello'
        }
      }
      common: {
        key: 'why'
      }
    }
  },
});

i18next.t('common:key');
i18next.t('key', {ns: 'common'});
```

### nested keys

Each key can be an object. You select nested keys dividing the key with a `.`

```js
i18next.init({
  lng: "en",
  fallbackNS: 'common',
  resources: {
    en: {
      translation: {
        deep: {
          key: "hello",
        },
      },
    },
  },
});

i18next.t("deep.key");
```

### pluralization

It uses an underscore `_` in the key, with the amount after (in text).


### context

It is mostly for female/male or these kind of contexts. It uses an underscore `_` 
in the key like for pluralization, and they also work together (plural at the end of the key).


### interpolation

With interpolation, the order of the words can be different for different languages.
Wrap interpolated words with `{{}}`
