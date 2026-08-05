# SR site 26

Одностраничное портфолио по макету Figma **SR site 26**. Реализация: React, TypeScript и Vite, стили — обычный CSS без UI-фреймворка.

## Запуск

Требуется Node.js 20 или новее.

```bash
npm install
npm run dev
```

Vite выведет локальный адрес, обычно `http://localhost:5173`.

## Проверка и production-сборка

```bash
npm run lint
npm run build
npm run preview
```

Готовая статическая сборка появится в `dist/`. Её можно разместить на любом статическом хостинге.

## Медиа

- `public/media/showreel.mp4` — видео в первом экране.
- `public/media/portrait.svg` — изображение в блоке «Обо мне».
- `public/media/placeholders/project-poster.svg` — временный серый постер.
- Рекомендуемая структура реального проекта:

```text
public/media/projects/project-slug/
  poster.webp
  video.mp4
  gallery-01.webp
  gallery-02.webp
  gallery-03.webp
```

После добавления файлов укажите пути в `src/data/projects.ts`. Для видео рекомендуется MP4 (H.264/AAC), для изображений — WebP или AVIF. Постер должен соответствовать пропорции видео 16:9. Видео проекта создаётся в DOM только у активного проекта и имеет `preload="none"`.

## Добавление проекта

Добавьте объект в массив `projects` в `src/data/projects.ts`:

```ts
{
  id: 'project-slug',
  title: 'Название',
  year: '2026',
  categories: ['2D', '3D'],
  description: ['Первая строка', 'Вторая строка'],
  media: {
    poster: '/media/projects/project-slug/poster.webp',
    video: '/media/projects/project-slug/video.mp4',
    gallery: [
      '/media/projects/project-slug/gallery-01.webp',
      '/media/projects/project-slug/gallery-02.webp',
      '/media/projects/project-slug/gallery-03.webp',
    ],
  },
}
```

Допустимые категории: `2D`, `3D`, `AI`. Чтобы временно убрать видео, удалите поле `video` — вместо него отобразится постер.

## Где менять содержимое

- Шоурил и подписи первого экрана: `src/components/Hero.tsx`.
- Проекты и фильтры: `src/data/projects.ts` и `src/components/Portfolio.tsx`.
- Биография и контакты: `src/components/About.tsx`.
- Размеры, адаптив и цвета: `src/styles.css`.

Шрифты Inter и Oswald подключаются через Google Fonts. Для полностью автономного размещения скачайте WOFF2-файлы, положите их в `public/fonts/` и замените `@import` в `src/styles.css` на локальные `@font-face`.
