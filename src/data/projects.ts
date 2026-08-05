import type { Project } from '../types'

const video = (src: string) => ({ type: 'video' as const, src })

export const projects: Project[] = [
  {
    id: 'modum',
    title: 'Modum',
    categories: ['2D'],
    description: ['Анимация интерфейса личного кабинета «Модум-Транс» — оператора железнодорожного подвижного состава. Проект визуализирует работу цифрового сервиса: данные, статусы, управление парком и ключевые функции платформы через аккуратную UI-анимацию.'],
    media: {
      video: new URL('../web-media/2d/Modum/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/2d/Modum/pv.webp', import.meta.url).href,
      gallery: [
        video(new URL('../web-media/2d/Modum/01.mp4', import.meta.url).href),
        video(new URL('../web-media/2d/Modum/02.mp4', import.meta.url).href),
        video(new URL('../web-media/2d/Modum/03.mp4', import.meta.url).href),
      ],
    },
  },
  {
    id: 'aghk',
    title: 'АГХК',
    categories: ['2D'],
    description: ['Видеоролик для выставки Амурского газохимического комплекса по производству базовых полимеров. Трекинг, цифровые карты, UI-графика и визуализация данных.'],
    media: {
      video: new URL('../web-media/2d/Sibur/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/2d/Sibur/pv.webp', import.meta.url).href,
      gallery: [
        new URL('../web-media/2d/Sibur/01.webp', import.meta.url).href,
        new URL('../web-media/2d/Sibur/02.webp', import.meta.url).href,
        new URL('../web-media/2d/Sibur/03.webp', import.meta.url).href,
      ],
    },
  },
  {
    id: 'waw',
    title: 'WAW',
    categories: ['2D'],
    description: ['Анимация контента для экранов выставочного пространства World Atomic Week. Проект включал подготовку динамичных экранных композиций, адаптированных под формат площадки и общий визуальный стиль мероприятия.'],
    media: {
      video: new URL('../web-media/2d/WAW/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/2d/WAW/pv.webp', import.meta.url).href,
      gallery: [],
    },
  },
  {
    id: 'hamovniki',
    title: 'Хамовники',
    categories: ['2D'],
    description: ['Имиджевый ролик для клубного дома «Хамовники 12», презентующий архитектуру, расположение и атмосферу проекта.'],
    media: {
      video: new URL('../web-media/2d/Ham/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/2d/Ham/pv.webp', import.meta.url).href,
      gallery: [],
    },
  },
  {
    id: 'sber-university',
    title: 'СберУниверситет',
    categories: ['2D'],
    description: ['Видео презентация итогов года для «СберУниверситета»: коллажная графика, 2D-анимация и динамичная промо-подача образовательной платформы.'],
    media: {
      video: new URL('../web-media/2d/SberUni/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/2d/SberUni/pv.webp', import.meta.url).href,
      gallery: [
        video(new URL('../web-media/2d/SberUni/01.mp4', import.meta.url).href),
        video(new URL('../web-media/2d/SberUni/02.mp4', import.meta.url).href),
        video(new URL('../web-media/2d/SberUni/03.mp4', import.meta.url).href),
      ],
    },
  },
  {
    id: 'gotek',
    title: 'Готэк',
    categories: ['3D'],
    description: ['3D naked-eye ролик для выставочного стенда компании Готэк, производящей упаковочные материалы.'],
    media: {
      video: new URL('../web-media/3d/Gotek/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/3d/Gotek/pv.webp', import.meta.url).href,
      gallery: [
        new URL('../web-media/3d/Gotek/01.webp', import.meta.url).href,
        new URL('../web-media/3d/Gotek/02.webp', import.meta.url).href,
        new URL('../web-media/3d/Gotek/03.webp', import.meta.url).href,
      ],
    },
  },
  {
    id: 'bas',
    title: 'BAS',
    categories: ['3D'],
    description: ['Видеоролик о применении беспилотных авиационных систем в строительном проектировании. Видео показывает путь от топосъёмки и лазерного сканирования участка до построения 3D-модели местности и использования этих данных в проектной работе.'],
    media: {
      video: new URL('../web-media/3d/BAS/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/3d/BAS/pv.webp', import.meta.url).href,
      gallery: [
        new URL('../web-media/3d/BAS/01.webp', import.meta.url).href,
        new URL('../web-media/3d/BAS/02.webp', import.meta.url).href,
        new URL('../web-media/3d/BAS/03.webp', import.meta.url).href,
      ],
    },
  },
  {
    id: 'white',
    title: 'Беленькая',
    categories: ['3D'],
    description: ['3D-визуализация новой упаковки водки «Беленькая»: моделинг, материалы, свет. Задачей было показать обновлённый дизайн упаковки в чистом рекламном визуале с акцентом на форму, стекло и детали этикетки.'],
    media: {
      video: new URL('../web-media/3d/White/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/3d/White/pv.webp', import.meta.url).href,
      gallery: [
        new URL('../web-media/3d/White/01.webp', import.meta.url).href,
        new URL('../web-media/3d/White/02.webp', import.meta.url).href,
        new URL('../web-media/3d/White/03.webp', import.meta.url).href,
      ],
    },
  },
  {
    id: 'ortoline',
    title: 'Ортолайн',
    categories: ['3D'],
    description: ['Серия 3D-видеороликов для «Ортолайн»: демонстрация ортопедической продукции, её конструкции, посадки и сценариев использования.'],
    media: {
      layout: 'ortoline',
      poster: new URL('../web-media/3d/ORTO/pv.webp', import.meta.url).href,
      gallery: [
        video(new URL('../web-media/3d/ORTO/01.mp4', import.meta.url).href),
        video(new URL('../web-media/3d/ORTO/02.mp4', import.meta.url).href),
        video(new URL('../web-media/3d/ORTO/03.mp4', import.meta.url).href),
        video(new URL('../web-media/3d/ORTO/04.mp4', import.meta.url).href),
        video(new URL('../web-media/3d/ORTO/05.mp4', import.meta.url).href),
        video(new URL('../web-media/3d/ORTO/06.mp4', import.meta.url).href),
      ],
    },
  },
  {
    id: 'tms',
    title: 'ТМС',
    categories: ['3D'],
    description: ['CGI-ролик для «Трансмехсервис» и «Develon»: механические детали, строительная техника, индустриальная атмосфера.'],
    media: {
      video: new URL('../web-media/3d/TMS/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/3d/TMS/pv.webp', import.meta.url).href,
      gallery: [],
    },
  },
  {
    id: 'mantalis',
    title: 'Манталис',
    categories: ['AI'],
    description: ['Видеоролик для мебельного бренда Манталис', 'при совместной работе shishka.media'],
    media: {
      layout: 'mantalis',
      video: new URL('../web-media/ai/Mantalis/Main.mp4', import.meta.url).href,
      poster: new URL('../web-media/ai/Mantalis/pvV.webp', import.meta.url).href,
      listPoster: new URL('../web-media/ai/Mantalis/pvH.webp', import.meta.url).href,
      gallery: [
        video(new URL('../web-media/ai/Mantalis/01.mp4', import.meta.url).href),
        new URL('../web-media/ai/Mantalis/02.webp', import.meta.url).href,
      ],
    },
  },
]
