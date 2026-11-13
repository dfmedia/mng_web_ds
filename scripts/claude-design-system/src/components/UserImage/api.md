The reader's avatar, a circle: their photo (`src`), their initials, or the generic user icon when nobody is signed in. `UserPic` wraps it with the status dots; on its own it's decorative unless you give it `alt`.

```js
const { UserImage } = window.mng_web_design_system;
h(UserImage, { size: 'medium', src: reader.photoUrl })
h(UserImage, { size: 'large', name: 'Gritty McGee' })             // monogram "GM"
h(UserImage, { graphic: 'unknown' })                              // logged out
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'small'` (30px), `'medium'` (40px), `'large'` (64px) | `'small'` |
| `graphic` | `'unknown'`, `'monogram'`, `'monogramPP'`, `'social'` | from `src` / `name` |
| `src` | photo URL (social) | |
| `initials`, `name` | monogram text (2 letters) | |
| `background`, `color` | the reader's monogram colors | sample art |
| `alt` | accessible name | hidden |
