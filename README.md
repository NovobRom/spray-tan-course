# Spray Tan Course — li_zagar_tan

Обучающий курс по моментальному загару, собранный в Next.js 15 веб-приложение.

## Стек

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** + `@tailwindcss/typography`
- **MDX** (`@next/mdx`) — контентные страницы

## Деплой на Vercel

1. Создать репозиторий на GitHub и залить эту папку (`web/`) как корень
2. Подключить репозиторий к [Vercel](https://vercel.com)
3. Vercel автоматически определит Next.js и задеплоит

> **Важно:** При создании репозитория — корнем должна быть папка `web/`, а не `spray-tan/`.

## Локальный запуск (требует Node.js)

```bash
npm install
npm run dev
```

Затем открыть [http://localhost:3000](http://localhost:3000).

## Структура

```
app/           — страницы Next.js (App Router)
components/    — переиспользуемые компоненты
content/       — MDX файлы с текстом курса
lib/           — навигация и прогресс
public/images/ — изображения из курса
```
